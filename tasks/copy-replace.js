#!/usr/bin/env node
var path = require('path');
var ncp = require('ncp');
ncp.limit = 16;
var fs = require('fs-extra');
var buildPath = path.resolve('build');
fs.ensureDir(buildPath, function (err) {
  if (err) { return console.log(err); }
  /* copy index */
  fs.createReadStream('client/index.html').pipe(fs.createWriteStream(path.join(buildPath, 'home.html')));

  /* replace paths */
  fs.readFile(buildPath + "/home.html", {encoding: "utf-8"}, function (err, data) {
    if ( err ) { return console.error(err); }

    /* load the minified libs */
    /* you can add more sources here */
    data = data.replace(/\/buildPath\//g , '/')
               .replace('main.css', 'main.min.css')
               .replace(/(.*)\.js/g, function (input, match) { return match + '.min.js'; });

    /* write html output */
    fs.writeFile(buildPath + "/home.html", data, function (err) { if (err) {return console.error(err);} });
  });

  /* copy static assets for local production */
  ncp("client/static", buildPath + "/static", function (err) {
   if (err) { return console.error(err); }
   /* copy assets for bower registry */
    ncp(buildPath + "/static/bundle", "dist", function (err) {
     if (err) { return console.error(err); }
    });
  });

});
