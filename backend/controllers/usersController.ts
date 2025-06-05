import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UsersController {
    static create() {
        return new UsersController(UserService.create());
    }

    constructor(private userService: UserService) {}

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
}