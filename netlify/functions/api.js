import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
console.log('api', api);

api.use('/', (req, res, next) => {
	console.log('i am inside server');
	next();
});
const router = Router();

router.get('/', (req, res) => res.send('Hello World!'));

api.use('/', router);

export const handler = serverless(api);
