import { Schema, model, Document } from 'mongoose';

export interface IStore extends Document {
    storeUrl: string;
    name: string;
    longitude: number;
    latitude: number;
    servesCuisine: string[];
    address: string;
    postcode: string;
    openingHoursSpecification: any[];
}

export const storeSchema = new Schema({
    storeUrl: String,
    name: String,
    longitude: Number,
    latitude: Number,
    servesCuisine: [String],
    address: String,
    postcode: String,
    openingHoursSpecification: [{}]
});

export const Store = model<IStore>('Store', storeSchema);