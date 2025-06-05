import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";

const router = express.Router();

router.get('/notifications/:userId', sseMiddleware, (req: Request, res: Response) => {
    console.log('user subscribed to notifs')
    setInterval(() => res.sseSend!({ time: new Date().toISOString() }), 1000);
})

export default router;