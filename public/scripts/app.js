"use strict";

console.log('App.js is running.');
var appInfo = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['one', 'two']
};
var template = React.createElement("div", null, React.createElement("h1", null, appInfo.title), appInfo.subtitle && React.createElement("p", null, appInfo.subtitle), React.createElement("p", null, appInfo.options && appInfo.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var user = {
  name: 'Daniel',
  age: 23,
  location: 'Monterrey, Nuevo León'
};

var getLocation = function getLocation(location) {
  if (location === undefined || location === '') {
    return;
  }

  return React.createElement("p", null, "Location:", location);
};

var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
