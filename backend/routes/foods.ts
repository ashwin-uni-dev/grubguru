import express from 'express';
import { FoodController } from "../controllers/foodController";
import { Request, Response } from "express";

const router = express.Router();
const controller = FoodController.create();

router.post('/', (req: Request, res: Response) => controller.getFoods(req, res));
router.post('/store-menu', (req: Request, res: Response) => controller.getStoreMenu(req, res))

export default router;