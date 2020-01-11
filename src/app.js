class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing1', 'Thing2', 'Thing4'];

    return (
      <div>
        <Header title={ title } subtitle={ subtitle }/>
        <Action />
        <Options options={ options } />
        <AddOption />
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
  handlerPick() {
    alert('Handler pick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlerPick}>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
  }

  handleRemoveAll() {
    alert('remove alllllll');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleRemoveAll.bind }>Remove all</button>
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
  handleAddOpton(e) {
    e.preventDefault();
    if(e.target.elements.option.value.trim()) {
      alert('Add option');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleAddOpton } action="">
          <input type="text" name="option" id="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'))