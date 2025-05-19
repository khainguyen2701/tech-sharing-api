import 'dotenv/config';
export const env = {
  port: process.env.PORT,
  redis_username: process.env.REDIS_USERNAME,
  redis_password: process.env.REDIS_PASSWORD,
  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT
};
