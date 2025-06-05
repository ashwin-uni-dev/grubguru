import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";
import {NotificationEventHandler} from "../events/NotificationEventHandler";

const router = express.Router();
const notificationHandler = NotificationEventHandler.create();

router.get('/notifications/:userId', sseMiddleware, (req: Request, res: Response) => notificationHandler.watchUser(req, res));

export default router;