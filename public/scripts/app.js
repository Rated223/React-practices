"use strict";

console.log('App.js is running.');
var appInfo = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var optionInput = e.target.elements.option.value;

  if (optionInput) {
    appInfo.options.push(optionInput);
    e.target.elements.option.value = '';
    render();
  }
};

var removeAll = function removeAll(e) {
  e.preventDefault();
  appInfo.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appInfo.options.length);
  var option = appInfo.options[randomNum];
  console.log(option);
};

var appRoot = document.querySelector('#app');

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, appInfo.title), appInfo.subtitle && React.createElement("p", null, appInfo.subtitle), React.createElement("button", {
    onClick: onMakeDecision,
    disabled: appInfo.options.length === 0
  }, "what should I do?"), React.createElement("p", null, appInfo.options && appInfo.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("ol", null, appInfo.options.map(function (option, index) {
    return React.createElement("li", {
      key: index
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add"), React.createElement("button", {
    onClick: removeAll
  }, "Remove all")));
  ReactDOM.render(template, appRoot);
};

render();
