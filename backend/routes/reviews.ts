import express from 'express';
import { Request, Response } from "express";
import {userIdParser} from "../middleware/userIdParser";
import {ReviewController} from "../controllers/reviewControllers";

const router = express.Router();
const controller = ReviewController.create();

router.use(userIdParser);

router.post('/', (req: Request, res: Response) => controller.createReview(req, res));
router.get('/:id', (req: Request, res: Response) => controller.getReviews(req, res));

export default router;