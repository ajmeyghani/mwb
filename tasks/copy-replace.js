#!/usr/bin/env node
var path = require('path');
var ncp = require('ncp');
ncp.limit = 16;
var fs = require('fs-extra');
fs.ensureDir("client/public/dist", function (err) {
  if (err) { return console.log(err); }
  //  copy index.
  fs.createReadStream('client/index.html').pipe(fs.createWriteStream('client/public/home.html'));

  //  replace js and css paths
  fs.readFile("client/public/home.html", {encoding: "utf-8"}, function (err, data) {
    if ( err ) { return console.error(err); }

    data = data.replace(/\/public\//g , '/')
               .replace('static/bundle.js', 'dist/bundle.min.js')
               .replace('angular.js', 'angular.min.js');

    fs.writeFile("client/public/home.html", data, function (err) { if (err) {return console.error(err);} });
  });

  // copy static files
  ncp("client/static", "client/public/static", function (err) {
   if (err) { return console.error(err); }
  });

});
