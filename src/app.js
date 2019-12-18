console.log('App.js is running.');

const appInfo = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: [
    'one',
    'two'
  ]
}

const template = (
  <div>
    <h1>{ appInfo.title }</h1>
    { appInfo.subtitle && <p>{ appInfo.subtitle }</p> }
    <p>{ ( appInfo.options && appInfo.options.length > 0 ) ? 'Here are your options' : 'No options' }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.querySelector('#app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={ addOne }>+1</button>
      <button onClick={ minusOne }>-1</button>
      <button onClick={ reset }>reset</button>
    </div>
  );
  
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();