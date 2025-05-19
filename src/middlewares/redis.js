const redisConfig = {
  username: env.redis_username,
  password: env.redis_password,
  socket: {
    host: env.redis_host,
    port: env.redis_port
  }
};
import { createClient } from 'redis';
import { env } from '../config';

class RedisMiddleware {
  async init(req, res, next) {
    try {
      const redis = createClient(redisConfig);
      req.redis = redis;

      redis.on('error', (err) => console.error('❌ Redis Client Error', err));
      redis.on('connect', () => console.log('🔌 Redis Client connect'));
      redis.on('ready', () => console.log('✅ Redis Client ready'));
      redis.on('end', () => console.log('🛑 Redis Client End'));

      await redis.connect();

      res.on('finish', async () => {
        try {
          await redis.quit();
        } catch (err) {
          console.error('❌ Redis quit failed:', err);
        }
      });

      next();
    } catch (error) {
      console.error('🔥 Redis middleware init error:', error);
      next(error);
    }
  }
}

export default RedisMiddleware;
