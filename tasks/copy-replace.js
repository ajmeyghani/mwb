#!/usr/bin/env node
var path = require('path');
var ncp = require('ncp');
ncp.limit = 16;
var fs = require('fs-extra');
fs.ensureDir("client/public", function (err) {
  if (err) { return console.log(err); }
  //  copy index.
  fs.createReadStream('client/index.html').pipe(fs.createWriteStream('client/public/home.html'));

  //  replace js and css paths
  fs.readFile("client/public/home.html", {encoding: "utf-8"}, function (err, data) {
    if ( err ) { return console.error(err); }

    data = data.replace(/\/public\//g , '/')
               .replace('bundle.js', 'bundle.min.js')
               .replace('/bower/angular/angular.js', '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js') // or replace with Angular CDN
               .replace('main.css', 'main.min.css');

    fs.writeFile("client/public/home.html", data, function (err) { if (err) {return console.error(err);} });
  });

  // copy static files
  ncp("client/static", "client/public/static", function (err) {
   if (err) { return console.error(err); }
  });

});
