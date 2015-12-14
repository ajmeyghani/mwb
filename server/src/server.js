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
  dist: path.resolve('dist')
};

/*\ Public static route for static assets.
\*/
if (isProd) {
  app.use('/', express.static(path.resolve(paths.dist)));
}
app.use('/bower', express.static(paths.bower));
app.use('/node_modules', express.static(paths.node_modules));

app.use('/static', express.static(path.join(paths.client, 'static')));

if (!isProd) {
   /* client webpack bundle output */
  app.use('/webpack-bundle', express.static(path.resolve(paths.client, 'webpack-bundle')));
}


/*\ Main route:
  - Serve index.html if not /api or not /otherendpoint
  - That is /api and /otherendpoint are reserved
\*/
app.all(/^\/(?!api|otherendpoint).*/, (req, res) => {
  res.sendFile('index.html', {root: isProd ? paths.dist : paths.client });
});

/*\ Api route example
\*/
app.get('/api/data', (req, res) => {
  res.json({
    name: 'boilerplate'
  });
});

/* client handle 404 */
app.all("/404", (req, res, next) => {
  res.sendFile("index.html", {root: paths.client });
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
