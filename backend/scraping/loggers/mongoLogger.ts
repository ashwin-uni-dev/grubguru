import { Logger } from './logger';
import { Model, Document } from 'mongoose';

export class MongoLogger<T extends Document> implements Logger {
    constructor(private model: Model<T>) {};

    async log(toLog: any[]) {
        for (const item of toLog) {
            try {
                const doc = new this.model(item);
                await doc.save();
            } catch (error) {
                console.error('Error saving to DB:', item, error);
            }
        }
    }
}
