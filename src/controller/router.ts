import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import logMiddleware from '../middleware/logMiddleware'
import {addRoute, countRoute, combinationsRoute, gridRoute, notImplemented} from './controller'

const router = Router()

router.get('/add/:q?', logMiddleware, asyncHandler(addRoute))
router.get('/count/:q?', logMiddleware, asyncHandler(countRoute))
router.get('/combinations/:q?', logMiddleware, asyncHandler(combinationsRoute))
router.get('/grid/:q?', logMiddleware, asyncHandler(gridRoute))
router.use('*', notImplemented)

export default router
