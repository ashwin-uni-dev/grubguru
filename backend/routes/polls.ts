import express from 'express';
import { Request, Response } from "express";
import {userIdParser} from "../middleware/userIdParser";
import {PollController} from "../controllers/pollController";

const router = express.Router();
const controller = PollController.create();

router.use(userIdParser);

router.post('/', (req: Request, res: Response) => controller.createPoll(req, res));
router.post('/:id/votes', (req: Request, res: Response) => controller.voteFood(req, res));
router.get('/:id', (req: Request, res: Response) => controller.getPoll(req, res));
router.delete('/:id', (req: Request, res: Response) => controller.deletePoll(req, res));

export default router;