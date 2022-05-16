import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { wordsRoute } from './Controller';
import logMiddleware from '../middleware/LogMiddleware';

const router = Router();

router.get('/topTenWords', logMiddleware, asyncHandler(wordsRoute));

export default router;
