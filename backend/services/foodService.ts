import mongoose, {Model} from 'mongoose';
import {FoodItem, IFoodItem} from "../schemas/foodItem";

export class FoodService {
    static create() {
        return new FoodService(FoodItem);
    }

    private storeInfoPipeline: any[] = [
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
    ];

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

    private tagComponent(moodTags: string[], nutritionTags: string[]) {
        const tags: any = {};

        if (nutritionTags.length > 0) {
            tags['$all'] = nutritionTags.map(tag => tag.toLowerCase());
        }

        if (moodTags.length > 0) {
            tags['$in'] = moodTags.map(tag => tag.toLowerCase());
        }

        return {
            tags
        };
    }

    private buildPipeline(query: any) {
        let pipeline: any[] = [];
        let matchStage: any = {};
        const moodTags = []
        const nutritionTags = []

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
            nutritionTags.push(...query.nutrition.tags);
            Object.assign(matchStage, nutritionMatch);
        }

        if (query.mood) {
            moodTags.push(...query.mood);
        }

        if (moodTags.length > 0 || nutritionTags.length > 0) {
            const tagMatch = this.tagComponent(moodTags, nutritionTags);
            Object.assign(matchStage, tagMatch);
        }

        if (Object.keys(matchStage).length > 0) {
            pipeline.push({ $match: matchStage });
        }

        return pipeline;
    }

    async getFoods(queryParams: any): Promise<IFoodItem[]> {
        try {
            console.log(queryParams);
            const pipeline = this.buildPipeline(queryParams);

            return await this.foodItemModel.aggregate([...pipeline, ...this.storeInfoPipeline]);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }

    async runPipelineWithStoreInfo(pipeline: any): Promise<any> {
        try {
            return await this.foodItemModel.aggregate([...pipeline, ...this.storeInfoPipeline]);
        } catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }

    async getFoodById(id: string) {
        const result = await this.foodItemModel.aggregate([
            {
                $match: {
                    '_id': new mongoose.Types.ObjectId(id)
                }
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

        return result[0];
    }

    async getFoodByStore(url: string) {
        return this.foodItemModel.aggregate([
            {
                $match: {
                    'storeUrl': url
                }
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
    }
}