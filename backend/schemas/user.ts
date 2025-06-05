import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    id: number;
    presets: any[];
    likes: string[];
}

const userSchema = new Schema({
    name: String,
    id: Number,
    presets: [{}],
    likes: [String],
})

export const User = model<IUser>('User', userSchema);