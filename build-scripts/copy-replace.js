#!/usr/bin/env node
var path = require('path');
var ncp = require('ncp');
ncp.limit = 16;
var fs = require('fs-extra');
var buildPath = path.resolve('dist');
fs.ensureDir(buildPath, function (err) {
  if (err) { return console.log(err); }
  /* copy index */
  fs.createReadStream('client/index.html').pipe(fs.createWriteStream(buildPath + '/index.html'));

  /* replace paths */
  fs.readFile(buildPath + "/index.html", {encoding: "utf-8"}, function (err, data) {
    if ( err ) { return console.error(err); }

    /* replace with cdn/minified scripts. */
    data = data.replace(/\/webpack-bundle\//g , '/')
               .replace('main.css', 'main.min.css')
               .replace(/(.*)\.js/g, function (input, match) { return match + '.min.js'; });

    /* write html output */
    fs.writeFile(buildPath + "/index.html", data, function (err) { if (err) {return console.error(err);} });
  });

  /* copy static assets to dist */
  ncp("client/static", buildPath + "/static", function (err) {
   if (err) { return console.error(err); }
  });

  /* copy the package and bower files */
  ncp("package.json", path.join(buildPath, 'package.json') , function (packErr) {
   if (packErr) { return console.error(packErr); }
  });

  ncp("bower.json", path.join(buildPath, 'bower.json') , function (packErr) {
   if (packErr) { return console.error(packErr); }
  });

  ncp(".bowerrc", path.join(buildPath, '.bowerrc') , function (brcErr) {
   if (brcErr) { return console.error(brcErr); }
  });

});
