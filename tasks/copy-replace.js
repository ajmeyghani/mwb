#!/usr/bin/env node
var path = require('path');
var ncp = require('ncp');
ncp.limit = 16;
var fs = require('fs-extra');
fs.ensureDir("client/public", function (err) {
  if (err) { return console.log(err); }
  /* copy index */
  fs.createReadStream('client/index.html').pipe(fs.createWriteStream('client/public/home.html'));

  /* replace paths */
  fs.readFile("client/public/home.html", {encoding: "utf-8"}, function (err, data) {
    if ( err ) { return console.error(err); }

    /* load the minified libs */
    data = data.replace(/\/public\//g , '/')
               .replace('bundle.js', 'bundle.min.js')
               .replace('main.css', 'main.min.css')
               .replace('<!-- prod:angular -->', '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>')
               /* other libs ... */

    /* write html output */
    fs.writeFile("client/public/home.html", data, function (err) { if (err) {return console.error(err);} });
  });

  /* copy static assets */
  ncp("client/static", "client/public/static", function (err) {
   if (err) { return console.error(err); }
  });

});
