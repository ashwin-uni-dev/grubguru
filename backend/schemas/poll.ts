import { Schema, model, Document } from 'mongoose';

export interface IPoll extends Document {
    id: number,
    votes: any[],
    options: any[]
}

const pollSchema = new Schema<IPoll>({
    id: {type: Number},
    votes: {type: [{}], default: []},
    options: {type: [{}], default: []}
});

export const Poll = model<IPoll>('Poll', pollSchema);
