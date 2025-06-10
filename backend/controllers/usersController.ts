import { Request, Response } from "express";
import { UserService } from "../services/userService";
import {BoardService} from "../services/boardService";
import {NotificationService} from "../services/notificationService";

export class UsersController {
    static create() {
        return new UsersController(UserService.create(),
            BoardService.create(),
            NotificationService.create());
    }

    constructor(private userService: UserService,
                private boardService: BoardService,
                private notificationService: NotificationService) {}


    async findUsersBySearch(req: Request, res: Response) {
        const search = req.query.search as string;

        if (!search) {
            res.status(400).send({ error: 'Search parameter is required' });
            return;
        }

        const users = await this.userService.findUsersBySearch(search);
        res.send(users);
    }

    async addFriend(req: Request, res: Response) {
        const id = req.userId!;
        const friendUsername = req.body.username;

        await this.userService.addFriend(id, friendUsername);
        res.send({ success: true });
    }

    async getPresets(req: Request, res: Response) {
        const id = req.userId!;
        const presets = await this.userService.getPresets(id);
        res.send({ presets });
    }

    async createUser(req: Request, res: Response) {
        await this.userService.createUser(req.body.username, req.body.password);
        res.send({ redirect: '/login' })
    }

    async addPreset(req: Request, res: Response){
        const id = req.userId!;
        await this.userService.addPreset(id, req.body);
        res.send({ success: true })
    }

    async toggleFoodLike(req: Request, res: Response) {
        const id = req.userId!;
        const foodId = req.body.foodId;
        await this.userService.toggleFoodLike(id, foodId);
    }

    async getLikedFoods(req: Request, res: Response) {
        const id = req.userId!;
        const foods = await this.userService.getLikedFoods(id);
        res.send(foods);
    }

    async doesLike(req: Request, res: Response) {
        const id = req.userId!;
        const foodId = req.params.foodId;
        const doesLike = await this.userService.doesLike(id, foodId);
        res.send(doesLike);
    }

    async addBoard(req: Request, res: Response) {
        const id = req.userId!;
        const { boardName } = req.body;

        const board = await this.boardService.createBoard(id, boardName);
        res.send(board);
    }

    async addFoodToBoard(req: Request, res: Response) {
        const id = req.userId!;
        const { foodId } = req.body;
        const { boardName } = req.params;
        await this.boardService.addToBoard(id, boardName, foodId);
        res.send({})
    }

    async getBoards(req: Request, res: Response) {
        const id = req.userId!;
        const boards = await this.boardService.getBoards(id);
        res.send(boards);
    }

    async getBoard(req: Request, res: Response) {
        const id = req.userId!;
        const { boardName } = req.params;
        const board = await this.boardService.getBoard(id, boardName);
        res.send(board);
    }

    async getFriends(req: Request, res: Response) {
        const id = req.userId!;
        const friends = await this.userService.getFriends(id);
        res.send(friends);
    }

    async removeFriend(req: Request, res: Response) {
        const id = req.userId!;
        const username = req.body.username;
        await this.userService.removeFriend(id, username);
        res.send({ success: true });
    }

    async getNotifications(req: Request, res: Response) {
        const notifications = await this.notificationService.getNotifications(req.user!.username);
        res.send(notifications);
    }
}