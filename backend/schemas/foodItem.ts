import { Schema, model, Document } from 'mongoose';

export interface IFoodItem extends Document {
    name: string;
    price: number;
    desc: string;
    kcal: number;
    imgUrl: string;
    uberUrl: string;
    storeUrl: string,
}


const foodItemSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    kcal: Number,
    imgUrl: String,
    uberUrl: String,
    storeUrl: String,
})

export const FoodItem = model<IFoodItem>('FoodItem', foodItemSchema);