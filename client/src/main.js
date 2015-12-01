/*\
 * Load the css
\*/
require('main.css');
/*\
 * Load an icon
\*/
let icon = require('icon.png');
/*\
 * Set the angular module.
\*/
const boiler = angular.module('mymodulename', []);

boiler.controller('AppCtrl', function () {
  this.name = `hello boiler`;
});

boiler.directive('myimage', function () {
  return {
    restrict: 'E',
    template: `<image src=${icon}></div>`
  };
});

boiler.directive('hello', () => ({
  restrict: 'E',
  template: require('hello.tpl.html')
}));
//
module.exports = boiler;
