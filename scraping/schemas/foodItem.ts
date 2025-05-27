import { Schema, model, Document } from 'mongoose';
import { storeSchema, IStore } from './store';

export interface IFoodItem extends Document {
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
    uberUrl: string;
    storeData: IStore;
}


const foodItemSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    imgUrl: String,
    uberUrl: String,
    storeData: storeSchema
})

export const FoodItem = model<IFoodItem>('FoodItem', foodItemSchema);