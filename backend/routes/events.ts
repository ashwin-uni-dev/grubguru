import express from 'express';
import { Request, Response } from "express";
import {sseMiddleware} from "../middleware/sse";

const router = express.Router();

router.get('/notifications/:userId', sseMiddleware, (req: Request, res: Response) => {
    console.log('user subscribed to notifs')
    res.sseSend!({ time: new Date().toISOString() });
})

export default router;