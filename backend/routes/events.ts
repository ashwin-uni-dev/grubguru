import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";
import {NotificationEventHandler} from "../events/NotificationEventHandler";
import {userIdParser} from "../middleware/userIdParser";
import {ReviewEventHandler} from "../events/ReviewEventHandler";
import {PollEventHandler} from "../events/PollEventHandler";

const router = express.Router();
const notificationHandler = NotificationEventHandler.create();
const reviewEventHandler = ReviewEventHandler.create();
const pollEventHandler = PollEventHandler.create();

router.use(userIdParser);

router.get('/notifications', sseMiddleware, (req: Request, res: Response) => notificationHandler.watchUserNotifs(req, res));
router.get('/reviews', sseMiddleware, (req: Request, res: Response) => reviewEventHandler.watchReviews(req, res));
router.get('/polls', sseMiddleware, (req: Request, res: Response) => pollEventHandler.watchPolls(req, res));

export default router;