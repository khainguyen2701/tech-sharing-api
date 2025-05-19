import express from 'express';
import { redisRouter } from './redis';
const router = express.Router();

router.use('/redis', redisRouter);

export const apis_v1 = router;
