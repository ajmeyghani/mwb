const path = require('path');
const env = process.env.NODE_ENV;
const isProd = env === 'production';
const express = require('express');
const app = express();

const paths = {
  client: path.resolve('./client'),
  server: path.resolve('./server'),
  bower: path.resolve('bower'),
  node_modules: path.resolve('node_modules'),
  build: path.resolve('./build')
};

const serverSettings = { client: path.resolve('./client') };

/*\ Public static route for static assets.
\*/

if (isProd) {
  app.use('/', express.static(path.resolve(paths.build)));
}
app.use('/bower', express.static(paths.bower));
app.use('/node_modules', express.static(paths.node_modules));

const staticPath = path.join(paths.client, 'static');
app.use('/static', express.static(staticPath));

/*\ Main route:
  - Serve index.html if not /api or not /somethingelse
  - That is /api and /somethingelse are reserved
\*/
const serverRoot = isProd ? paths.build : paths.client;
app.all(/^\/(?!api|somethingelse).*/, (req, res) => {
  if (!isProd) {
    res.sendFile('index.html', {root: serverRoot });
  } else {
    res.sendFile('home.html', {root: serverRoot });
  }
});

/* The somethingelse endpoint */
app.all('/somethingelse', (req, res) => {
  res.json({
    "app": "something"
  });
});

/*\ Api route example
\*/
/* this could be cached with redis for example */
app.get('/api/data', (req, res) => {
  res.json({
    name: 'boilerplate'
  });
});

/* client handle 404 */
app.all("/404", (req, res, next) => {
  res.sendFile("index.html", {root: serverSettings.client });
});

/* catch invalid requests */
app.get('*', (req, res, next) => {
 console.log("404: " + req.originalUrl + " was not found");
 res.status(404).redirect("/404");
});

let port = undefined;
if (isProd) {
  port = 8080
} else {
  port = process.env.PORT || 8760;
}
app.listen(port, function () {
  console.log('go to -> http://localhost:' + port);
  if (env === 'production') {
    require('open')('http://localhost:' + port);
  }
});


