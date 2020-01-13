class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={ title } subtitle={ subtitle }/>
        <Action 
          hasOptions = { this.state.options.length > 0 } 
          handlePick = {this.handlePick}
        />
        <Options 
          options = { this.state.options } 
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={ !this.props.hasOptions }
        >
          {this.props.hasOptions}
          What Should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove all</button>
        {
          this.props.options.map((option) => {
            return <Option key={ option } optionText = { option }/>
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        { this.props.optionText }
      </div>
    );
  }
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

    this.setState(() => {
      return {
        error
      }
    });
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

const User = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'))