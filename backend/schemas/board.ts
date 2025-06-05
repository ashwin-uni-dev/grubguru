import {Schema, model, Document, Types} from 'mongoose';

export interface IBoard extends Document {
    userId: number,
    boardName: string,
    foods: Types.ObjectId[],
}

const boardSchema = new Schema({
    userId: { type: Number, required: true },
    boardName: { type: String, required: true },
    foods: [{ type: Types.ObjectId, ref: 'FoodItem' }],
})

export const Board = model<IBoard>('Board', boardSchema);