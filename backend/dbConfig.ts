import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDb = () => mongoose.connect(process.env.MONGO_URI || '');