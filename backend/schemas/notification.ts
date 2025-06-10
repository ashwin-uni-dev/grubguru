import { Schema, model, Document, Types } from 'mongoose';

export interface INotification extends Document {
    for: string;
    type: string;
    title: string;
    text: string;
    createdAt: Date;
}

const notificationSchema = new Schema<INotification>({
    for: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Notification = model<INotification>('Notification', notificationSchema);
