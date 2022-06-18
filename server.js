var express = require('express'),
  app = express(),
  port = process.env.PORT || 3030,
  bodyParser = require('body-parser'),
  gitlabclient = require('./config/client'),
  constants = require('./config/constants');
  client = gitlabclient.client;

  var swaggerUi = require('swagger-ui-express');
  var swaggerDocumentGitlab = require('./swagger.json'); 
client.Promise = global.Promise;
constants.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api-docs-gitlab', swaggerUi.serve, swaggerUi.setup(swaggerDocumentGitlab));
var routesGitlab = require('./api/routes/gitlabRoutes'); //importing route gitlab
routesGitlab(app);
app.listen(port);

console.log('gitlab RESTful API server started on: ' + port);
