/*\
 * Set the angular module.
\*/
const boiler = angular.module('boiler', []);

boiler.controller('AppCtrl', function () {
  this.name = "Hello World Boiler!";
});

/*\
 * Bootstrap the app.
\*/
angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('body')[0], ['boiler']);
});

module.exports = boiler;
