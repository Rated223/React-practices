import React from 'react';
import {
  AddOption,
  Header,
  Action,
  Options,
  OptionModal
} from '.';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if(this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionSelected) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionSelected)
    }))
  }
  
  handlePick = () => {
    const choise = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[choise]
    }));
  }
  
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }

  handleDeleteSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  
  componentDidMount() {
    try {  
      const json = localStorage.getItem('options');
  
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({ options }))
      }
    } catch(e) {
      
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={ subtitle }/>
        <div className="container">
          <Action 
            hasOptions = { this.state.options.length > 0 } 
            handlePick = {this.handlePick}
          />
          <Options 
            options = { this.state.options } 
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOption 
            handleAddOption = {this.handleAddOption}
          />
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption = {this.handleDeleteSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}