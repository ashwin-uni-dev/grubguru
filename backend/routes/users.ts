import express from 'express';
import { UsersController } from "../controllers/usersController";
import { Request, Response } from "express";
import {userIdParser} from "../middleware/userIdParser";

const router = express.Router();
const controller = UsersController.create();

router.use(userIdParser);

router.get('/', (req: Request, res: Response) => controller.findUsersBySearch(req, res));

router.get('/friends', (req: Request, res: Response) => controller.getFriends(req, res));
router.post('/friends', (req: Request, res: Response) => controller.addFriend(req, res));
router.delete('/friends', (req: Request, res: Response) => controller.removeFriend(req, res));

router.get('/presets', (req: Request, res: Response) => controller.getPresets(req, res));
router.post('/presets', (req: Request, res: Response) => controller.addPreset(req, res));

router.get('/likes/:foodId', (req: Request, res: Response) => controller.doesLike(req, res));
router.get('/likes', (req: Request, res: Response) => controller.getLikedFoods(req, res));
router.post('/likes', (req: Request, res: Response) => controller.toggleFoodLike(req, res));

router.get('/boards', (req: Request, res: Response) => controller.getBoards(req, res));
router.get('/boards/:boardName', (req: Request, res: Response) => controller.getBoard(req, res));
router.post('/boards', (req: Request, res: Response) => controller.addBoard(req, res));
router.post('/boards/:boardName', (req: Request, res: Response) => controller.addFoodToBoard(req, res));

router.get('/notifications', (req: Request, res: Response) => controller.getNotifications(req, res));

export default router;