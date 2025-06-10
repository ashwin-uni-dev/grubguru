import { Schema, model, Document, Types } from 'mongoose';

export interface INotification extends Document {
    for: string;
    source: string;
    type: string;
    text: string;
    createdAt: Date;
    metadata: any;
}

const notificationSchema = new Schema<INotification>({
    source: { type: String, required: true },
    for: { type: String, required: true },
    type: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    metadata: { type: {}, default: {} }
});

export const Notification = model<INotification>('Notification', notificationSchema);
