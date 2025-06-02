import {Model} from 'mongoose';
import {FoodItem, IFoodItem} from "../schemas/foodItem";

export class FoodService {
    static create() {
        return new FoodService(FoodItem);
    }

    constructor(
        private foodItemModel: Model<IFoodItem>
    ) {}

    private budgetComponent(budget: number) {
        return {
            price: {
                $lt: budget
            }
        };
    }

    private nutritionComponent(nutrition: any) {
        if (nutrition && nutrition.minCalories !== undefined && nutrition.maxCalories !== undefined) {
            return {
                kcal: {
                    $gt: nutrition.minCalories,
                    $lt: nutrition.maxCalories
                }
            };
        }
        return {};
    }

    private searchComponent(searchQuery: string) {
        return {
            index: 'default',
            text: {
                query: searchQuery,
                path: {
                    'wildcard': '*'
                }
            }
        };
    }

    private buildPipeline(query: any) {
        let pipeline: any[] = [];
        let matchStage: any = {};

        if (query.search) {
            const searchConfig = this.searchComponent(query.search);
            pipeline.push({ $search: searchConfig });
        }

        if (query.budget) {
            const budgetMatch = this.budgetComponent(query.budget);
            Object.assign(matchStage, budgetMatch);
        }

        if (query.nutrition) {
            const nutritionMatch = this.nutritionComponent(query.nutrition);
            Object.assign(matchStage, nutritionMatch);
        }

        if (Object.keys(matchStage).length > 0) {
            pipeline.push({ $match: matchStage });
        }

        return pipeline;
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

            return await this.foodItemModel.aggregate([...pipeline, ...postProcessing]);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }
}