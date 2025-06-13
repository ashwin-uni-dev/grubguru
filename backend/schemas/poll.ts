import { Schema, model, Document } from 'mongoose';

interface Votes {
    count: number,
    storeInfo: any
}

export interface IPoll extends Document {
    id: number,
    votes: { [key: string]: Votes },
}

const pollSchema = new Schema<IPoll>({
    id: {type: Number},
    votes: {type: Schema.Types.Mixed, default: {}}
});

export const Poll = model<IPoll>('Poll', pollSchema);
