import { Model } from 'mongoose';
import {FoodItem, IFoodItem} from "../schemas/foodItem";

export class FoodService {
    static create() {
        return new FoodService(FoodItem);
    }

    constructor(
        private foodItemModel: Model<IFoodItem>
    ) {}

    async getFoods(): Promise<IFoodItem[]> {
        try {
            return await this.foodItemModel.aggregate([
                {
                    $sample: { size: 20 } // Randomly select 20 documents
                },
                {
                    $lookup: {
                        from: 'stores',
                        localField: 'storeUrl',
                        foreignField: 'storeUrl',
                        as: 'storeInfo'
                    }
                },
                {
                    $unwind: '$storeInfo'
                }
            ]);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }
}