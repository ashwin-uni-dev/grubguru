import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    id: number;
    presets: any[];
    likes: string[];
}

const userSchema = new Schema({
    username: String,
    password: String,
    id: Number,
    presets: [{}],
    likes: [String]
})

export const User = model<IUser>('User', userSchema);