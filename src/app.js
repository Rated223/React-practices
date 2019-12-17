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

const user = {
  name: 'Daniel',
  age: 23,
  location: 'Monterrey, Nuevo León'
}

const getLocation = (location) => {
  if (location === undefined || location === '') {
    return;
  }

  return <p>Location:{ location }</p>;
}

const templateTwo = (
  <div>
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    { ( user.age && user.age >= 18 ) && <p>Age: { user.age }</p> }
    { getLocation(user.location) }
  </div>
);


const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);