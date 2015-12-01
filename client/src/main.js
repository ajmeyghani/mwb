/*\
 * Load some css
\*/
require('main.css');

/*\
 * Set the angular module.
\*/
const boiler = angular.module('mymodulename', []);

/*\
 * A basic contorller
\*/
boiler.controller('AppCtrl', function () {
  this.name = `hello boiler`;
});

/*\                                    /*\
 * -- Interesting stuff starts here --  *
\*/                                    /*\

/*\
 * Loading an asset (png image)
\*/
const icon = require('icon.png');
/*\
 * Using the png inside a directive
\*/
boiler.directive('myimage', function () {
  return {
    restrict: 'E',
    template: `<div><image src=${icon}></div>`
  };
});

/*\
 * Loading an html template
\*/
const helloTpl = require('hello.tpl.html');
/*\
 * Using ES6 Syntax
 * Also, using the template (helloTpl) loaded by webpack inside a directive
\*/
boiler.directive('hello', () => ({
  restrict: 'E',
  template: helloTpl
}));
/*\
 * Export the module at the end
 * Important to use `module.exports` explicitly
\*/
module.exports = boiler;
