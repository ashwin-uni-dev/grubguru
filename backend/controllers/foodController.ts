import { FoodService } from "../services/foodService";
import { Request, Response } from "express";

export class FoodController {
    static create() {
        return new FoodController(FoodService.create());
    }

    constructor(private foodService: FoodService) {}

    async searchFoods(req: Request, res: Response) {
        const query = req.query.q as string;
        const foods = await this.foodService.searchFoods(query);
        res.send(foods);
    }
    async getFoods(req: Request, res: Response) {
        const foods = await this.foodService.getFoods();
        res.send(foods);
    }
}