import { FoodService } from "../services/foodService";
import { Request, Response } from "express";

export class FoodController {
    static create() {
        return new FoodController(FoodService.create());
    }

    constructor(private foodService: FoodService) {}

    async getFoods(req: Request, res: Response) {
        const foods = await this.foodService.getFoods();
        res.send(foods);
    }
}