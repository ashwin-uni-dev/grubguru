import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    id: number;
    presets: any[]
}

const userSchema = new Schema({
    name: String,
    id: Number,
    presets: [{}]
})

export const User = model<IUser>('User', userSchema);