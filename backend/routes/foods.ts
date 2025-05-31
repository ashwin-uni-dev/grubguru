import express from 'express';
import { FoodController } from "../controllers/foodController";
import { Request, Response } from "express";

const router = express.Router();
const controller = FoodController.create();

router.get('/', (req: Request, res: Response) => controller.getFoods(req, res));
router.get('/search', (req: Request, res: Response) => controller.searchFoods(req, res));

export default router;