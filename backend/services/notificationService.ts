import {Model, Types} from 'mongoose';
import {INotification, Notification} from "../schemas/notification";

export interface NotificationData {
    source: string,
    type: string,
    text: string,
    metadata?: any
}

export class NotificationService {
    static create() {
        return new NotificationService(Notification);
    }

    constructor(
        private notificationModel: Model<INotification>
    ) {}

    notifyUser(username: string, notificationData: NotificationData) {

        const notification = new this.notificationModel({
            for: username,
            ...notificationData
        })

        notification.save();
    }

    notifyUsers(usernames: string[], notificationData: NotificationData) {
        for (const username of usernames) {
            this.notifyUser(username, notificationData);
        }
    }

    async getNotifications(username: string) {
        return await this.notificationModel.find({for: username}).sort({createdAt: -1});
    }
}