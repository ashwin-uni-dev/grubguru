import { Model } from 'mongoose';
import {FoodItem, IFoodItem} from "../schemas/foodItem";

export class FoodService {
    private foodItemModel: Model<IFoodItem>;

    static create() {
        return new FoodService(FoodItem);
    }

    constructor(foodItemModel: Model<IFoodItem>) {
        this.foodItemModel = foodItemModel;
    }

    async getFoods(): Promise<IFoodItem[]> {
        try {
            return await this.foodItemModel.find({}).limit(20);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }
}