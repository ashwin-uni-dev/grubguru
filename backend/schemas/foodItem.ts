import { Schema, model, Document } from 'mongoose';

export interface IFoodItem extends Document {
    name: string;
    price: number;
    desc: string;
    kcal: number;
    imgUrl: string;
    uberUrl: string;
    storeUrl: string,
    tags: string[];
}

const foodItemSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    kcal: Number,
    imgUrl: String,
    uberUrl: String,
    storeUrl: String,
    tags: [String]
})

foodItemSchema.virtual('storeInfo', {
    ref: 'Store',
    localField: 'storeUrl',
    foreignField: 'storeUrl',
    justOne: true
});

foodItemSchema.set('toObject', { virtuals: true });
foodItemSchema.set('toJSON', { virtuals: true });

export const FoodItem = model<IFoodItem>('FoodItem', foodItemSchema);