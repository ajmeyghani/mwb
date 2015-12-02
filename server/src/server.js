let path = require('path');
let express = require('express');
let app = express();
var env = process.env.NODE_ENV;
var isProd = env === 'production';

let serverSettings = { client: path.resolve('./client') };

/*\ Public static route for static assets.
\*/

if (env === 'production') {
  app.use('/', express.static(path.resolve('client/public')));
}

let bowerPath = path.join(serverSettings.client, 'bower');
let nodeModulesPath = path.join(serverSettings.client, 'node_modules');
let staticPath = path.join(serverSettings.client, 'static');
let publicPath = path.join(serverSettings.client, 'public');
app.use('/bower', express.static(bowerPath));
app.use('/static', express.static(staticPath));
app.use('/public', express.static(publicPath));
app.use('/node_modules', express.static(nodeModulesPath));

/*\ Main route:
  - If the request URI does not start with `api`, serve `index.html`.
\*/
app.all(/^\/(?!api).*/, (req, res) => {
  if (env !== "production") {
    res.sendFile('index.html', {root: serverSettings.client });
  } else {
    res.sendFile('home.html', {root: path.resolve('./client/public') });
  }
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
