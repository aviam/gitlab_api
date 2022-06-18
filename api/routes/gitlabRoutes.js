'use strict';
module.exports = function(app) {
  var constants = require('../../config/constants'); 
  var gitlabController = require('../controllers/gitlabController');
  var base_url_api_v1 = constants.BASE_URL_API_V1;
 
  // Projects Routes
  app.route(base_url_api_v1+'/projects')
    .get(gitlabController.list_all_projects);

  // Projects commits route  
  app.route(base_url_api_v1+'/projects/:id')
    .get(gitlabController.get_project_by_id);

 // get sepcific project detailes
 app.route(base_url_api_v1+'/projects/commits/:id')
    .get(gitlabController.list_all_projects_commits);

    
 app.route(base_url_api_v1+'/users') 
    .get(gitlabController.list_all_users);

// get gitlab_service swagger
 app.route(base_url_api_v1+'/paths')
    .get(gitlabController.get_swagger);    
};



 