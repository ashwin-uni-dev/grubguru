import {Model, PipelineStage} from 'mongoose';
import {FoodItem, IFoodItem} from "../schemas/foodItem";

export class FoodService {
    static create() {
        return new FoodService(FoodItem);
    }

    constructor(
        private foodItemModel: Model<IFoodItem>
    ) {}

    private budgetComponent(stage: any , budget: number) {
        stage.price = {
            $lt: budget
        }

        return stage;
    }

    private nutritionComponent(stage: any, nutrition: any) {
        stage.kcal = {
            $gt: nutrition.minCalories,
            $lt: nutrition.maxCalories
        }

        return stage;
    }

    private buildPipeline(query: any) {
        let match: any = {}
        let search: any = {}

        if (query.budget) {
            match = this.budgetComponent(match, query.budget);
        }

        if (query.nutrition) {
            match = this.nutritionComponent(match, query.nutrition);
        }

        return [{ '$match': match }];
    }

    async getFoods(queryParams: any): Promise<IFoodItem[]> {
        try {
            const pipeline = this.buildPipeline(queryParams);
            const postProcessing = [
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
            ]

            console.log(pipeline);

            return await this.foodItemModel.aggregate([...pipeline, ...postProcessing]);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }
}