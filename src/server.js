import express from 'express';
import { env } from './config';
import cors from 'cors';
import { corsOptions } from './config/cors';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors(corsOptions));
  const { port } = env; 

  app.get('/', (req, res, next) => {
    res.send('Hello World');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
createServer();
