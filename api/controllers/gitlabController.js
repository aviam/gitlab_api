'use strict';
var gitlabclient = require('../../config/client');
var client = gitlabclient.client;
var fs = require('fs');
var path = require('path');
var swaggerPath = path.join(__dirname, '..', '..', 'swagger.json');
var obj = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));
exports.list_all_projects = function(req, res) {
// Listing projects
client.projects.list({}, function (err, projects) {
  if (err) {
      res.send(err);
  } else {
    res.json(projects);
  }  
 });
};


exports.get_project_by_id = function(req, res) {
client.projects.get({id: req.params.id}, function (err, project) {
  if (err) {
      res.send(err);
  } else {
    res.json(project);
  }  
 });
};
exports.list_all_users = function(req,res){
   //list all users
   client.users.list({},function(err, users){
    if (err) {
      res.send(err);
    } else {  
     res.json(users);
    } 
   });
};

exports.list_all_projects_commits = function(req, res){

    client.repository.getCommits({id: req.params.id}, function (err, commits){
      if (err) {
        res.send(err);
      } else {  
       res.json(commits);
      } 

    });

};

exports.get_swagger = function (req, res){
  res.json(obj);    
};
