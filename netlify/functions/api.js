import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World from serverless!'));
router.get('/auth', (req, res) => res.send('Hello Auth from serverless!'));

api.use('/api/', router);

export const handler = serverless(api);
