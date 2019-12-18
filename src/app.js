console.log('App.js is running.');

const appInfo = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const optionInput = e.target.elements.option.value;
  if (optionInput) {
    appInfo.options.push(optionInput);
    e.target.elements.option.value = '';
    render();
  }
}

const removeAll = (e) => {
  e.preventDefault();
  appInfo.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNum];
  console.log(option);

}

const appRoot = document.querySelector('#app');

const render = () => {
  const template = (
    <div>
      <h1>{ appInfo.title }</h1>
      { appInfo.subtitle && <p>{ appInfo.subtitle }</p> }
      <button onClick={ onMakeDecision } disabled={ appInfo.options.length === 0 }>what should I do?</button>
      <p>{ ( appInfo.options && appInfo.options.length > 0 ) ? 'Here are your options' : 'No options' }</p>
      <ol>
        { 
          appInfo.options.map((option, index) => <li key={index}>{option}</li>)
        }
      </ol>
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option"/>
        <button>Add</button>
        <button onClick={ removeAll }>Remove all</button>
      </form>
    </div>
  );
    
  ReactDOM.render(template, appRoot);
}

render();
