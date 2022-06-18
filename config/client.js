'use strict';
var gitlab = require('node-gitlab');
 // Instantiating
const client = gitlab.create({
    api: 'https://gitlab.com/api/v4',
    privateToken: 'oodXVvvVs9dAphKdB9sM'
});
client.requestTimeout = 120000;
exports.client = client;