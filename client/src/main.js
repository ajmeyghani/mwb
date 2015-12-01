/*\
 * Set the angular module.
\*/
const boiler = angular.module('mymodulename', []);

boiler.controller('AppCtrl', function () {
  this.name = "Hello World Boiler!";
});

module.exports = boiler;
