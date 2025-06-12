import { FoodService } from "../services/foodService";
import { Request, Response } from "express";

export class FoodController {
    static create() {
        return new FoodController(FoodService.create());
    }

    constructor(private foodService: FoodService) {}

    async getFoods(req: Request, res: Response) {
        const foods = await this.foodService.getFoods(req.body);
        res.send(foods);
    }

    async getStoreMenu(req: Request, res: Response) {
        const foods = await this.foodService.getFoodByStore(req.body.storeUrl);
        res.send(foods);
    }
}