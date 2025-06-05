import {Model, Types} from 'mongoose';
import {IReview, Review} from "../schemas/review";

export class ReviewService {
    static create() {
        return new ReviewService(Review);
    }

    constructor(
        private reviewModel: Model<IReview>
    ) {}

    async createReview(author: string, review: string, foodId: string) {
        try {
            console.log(author, review, foodId);
            const newReview = new this.reviewModel({
                author,
                review,
                foodId: new Types.ObjectId(foodId),
            });

            return await newReview.save();
        } catch (err: any) {
            console.log(err.message);
        }
    }

    async getReviews(foodId: string, onlyTop: boolean) {
        if (!Types.ObjectId.isValid(foodId)) {
            throw new Error('Invalid foodId');
        }

        const query = this.reviewModel
            .find({foodId: new Types.ObjectId(foodId)})
            .sort({createdAt: -1});

        if (onlyTop) {
            query.limit(1);
        }

        return await query.exec();
    }
}