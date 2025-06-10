import {Model, Types} from 'mongoose';
import {INotification, Notification} from "../schemas/notification";

interface NotificationData {
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
        const {type, title, text} = notificationData;

        const notification = new this.notificationModel({
            for: username,
            type,
            title,
            text
        })

        notification.save();
    }
}