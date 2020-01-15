class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      options: []
    };
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

  componentDidUpdate(prevProps, prevState) {
    if(this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionSelected) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionSelected)
    }))
  }

  handlePick() {
    const choise = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[choise]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={ subtitle }/>
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
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      {props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={ !props.hasOptions }
      >
        {props.hasOptions}
        What Should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => (
          <Option 
            key={ option } 
            optionText = { option }
            handleDeleteOption = {props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={ this.handleAddOption } action="">
          <input type="text" name="option" id="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.querySelector('#app'))