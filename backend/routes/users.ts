import express from 'express';
import { UsersController } from "../controllers/usersController";
import { Request, Response } from "express";
import {userIdParser} from "../middleware/userIdParser";

const router = express.Router();
const controller = UsersController.create();

router.use('/:id', userIdParser);

router.get('/:id/presets', (req: Request, res: Response) => controller.getPresets(req, res));
router.post('/:id/presets', (req: Request, res: Response) => controller.addPreset(req, res));

router.get('/:id/likes/:foodId', (req: Request, res: Response) => controller.doesLike(req, res));
router.get('/:id/likes', (req: Request, res: Response) => controller.getLikedFoods(req, res));
router.post('/:id/likes', (req: Request, res: Response) => controller.toggleFoodLike(req, res));

export default router;