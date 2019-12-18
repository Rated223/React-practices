"use strict";

console.log('App.js is running.');
var appInfo = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['one', 'two']
};
var template = React.createElement("div", null, React.createElement("h1", null, appInfo.title), appInfo.subtitle && React.createElement("p", null, appInfo.subtitle), React.createElement("p", null, appInfo.options && appInfo.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.querySelector('#app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), React.createElement("button", {
    onClick: minusOne
  }, "-1"), React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
