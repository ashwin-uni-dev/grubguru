import express from 'express';
import { UsersController } from "../controllers/usersController";
import { Request, Response } from "express";

const router = express.Router();
const controller = UsersController.create();

router.get('/:id/presets', (req: Request, res: Response) => controller.getPresets(req, res));
router.post('/:id/presets', (req: Request, res: Response) => controller.addPreset(req, res));

export default router;