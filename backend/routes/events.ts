import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";
import {NotificationEventHandler} from "../events/NotificationEventHandler";
import {userIdParser} from "../middleware/userIdParser";
import {ReviewEventHandler} from "../events/ReviewEventHandler";

const router = express.Router();
const notificationHandler = NotificationEventHandler.create();
const reviewEventHandler = ReviewEventHandler.create();

router.use(userIdParser);

router.get('/notifications', sseMiddleware, (req: Request, res: Response) => notificationHandler.watchUserNotifs(req, res));
router.get('/reviews', sseMiddleware, (req: Request, res: Response) => reviewEventHandler.watchReviews(req, res));

export default router;