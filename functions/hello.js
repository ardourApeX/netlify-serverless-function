const { Router } = require('express');
const express = require('express');
const serverless = require('serverless-http');

const api = express();
console.log('api', api);

api.use('/', (req, res, next) => {
	console.log('i am inside server');
	next();
});
const router = Router();

router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api', router);

module.exports.handler = serverless(api);
