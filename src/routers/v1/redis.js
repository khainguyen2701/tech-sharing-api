import express from 'express';
import RedisMiddleware from '~/middlewares/redis';
import STATUS_CODE from '~/utils/statusCode';
const router = express.Router();

const redis = new RedisMiddleware();

router.use(redis.init);

router.route('/').get((req, res, next) => {
  res.responseHandler('gets', {}, STATUS_CODE.OK);
});

export const redisRouter = router;
