import { env } from './environment';

const whiteList = ['http://localhost:5173'];
export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin && env.build_mode === 'dev') {
      return callback(null, true);
    }

    if (whiteList.includes(origin)) {
      return callback(null, true);
    }

    return callback();
  },

  optionsSuccessStatus: 200,

  credentials: true
};
