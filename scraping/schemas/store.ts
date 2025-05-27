import { Schema, model } from 'mongoose';

export interface IStore {
    name: string;
    longitude: number;
    latitude: number;
    servesCuisine: string[];
    address: string;
    postcode: string;
    openingHoursSpecification: any[];
}

export const storeSchema = new Schema({
    name: String,
    longitude: Number,
    latitude: Number,
    servesCuisine: [String],
    address: String,
    postcode: String,
    openingHoursSpecification: [{}]
});