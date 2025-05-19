import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config';
import errorHandler from './middlewares/errorHandler';
import responseHandler from './middlewares/responseHandler';

import { apis_v1 } from './routers/v1';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(express.json());
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: false,
      permittedCrossDomainPolicies: {
        permittedPolicies: 'none'
      }
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(responseHandler);
  const { port } = env;
  app.use('/v1', apis_v1);

  app.use(errorHandler);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
createServer();
