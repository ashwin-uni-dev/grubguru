import { Schema, model, Document } from 'mongoose';

export interface IFoodItem extends Document {
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
    uberUrl: string;
    storeUrl: string,
}


const foodItemSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    imgUrl: String,
    uberUrl: String,
    storeUrl: String,
})

export const FoodItem = model<IFoodItem>('FoodItem', foodItemSchema);