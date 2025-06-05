import { Schema, model, Document, Types } from 'mongoose';

export interface IReview extends Document {
    author: string;
    review: string;
    createdAt: Date;
    foodId: Types.ObjectId;
}

const reviewSchema = new Schema<IReview>({
    author: { type: String, required: true },
    review: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    foodId: { type: Schema.Types.ObjectId, required: true }
});

export const Review = model<IReview>('Review', reviewSchema);
