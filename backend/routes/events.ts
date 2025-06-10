import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";
import {NotificationEventHandler} from "../events/NotificationEventHandler";
import {userIdParser} from "../middleware/userIdParser";

const router = express.Router();
const notificationHandler = NotificationEventHandler.create();

router.use(userIdParser);

router.get('/notifications', sseMiddleware, (req: Request, res: Response) => notificationHandler.watchUserNotifs(req, res));

export default router;