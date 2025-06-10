import {Model, Types} from 'mongoose';
import {INotification, Notification} from "../schemas/notification";

export interface NotificationData {
    source: string,
    type: string,
    title: string,
    text: string
}

export class NotificationService {
    static create() {
        return new NotificationService(Notification);
    }

    constructor(
        private notificationModel: Model<INotification>
    ) {}

    notifyUser(username: string, notificationData: NotificationData) {
        const { source, type, title, text} = notificationData;

        const notification = new this.notificationModel({
            source,
            for: username,
            type,
            title,
            text
        })

        notification.save();
    }

    notifyUsers(usernames: string[], notificationData: NotificationData) {
        for (const username of usernames) {
            this.notifyUser(username, notificationData);
        }
    }
}