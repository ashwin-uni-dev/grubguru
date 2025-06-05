import passport from "passport";
import express, {Request, Response} from "express";
import {UsersController} from "../controllers/usersController";

const router = express.Router();
const controller = UsersController.create();

router.post('/login', passport.authenticate('local'), (req: Request, res: Response) => {
    console.log(req.user);
    res.send({ redirect: '/' })
});

router.post('/register', (req: Request, res: Response) => controller.createUser(req, res))

export default router;