import {Notification} from "../schemas/notification";
import {Request, Response} from 'express';

export class NotificationEventHandler {
    static create() {
        return new NotificationEventHandler();
    }

    watchUserNotifs(req: Request, res: Response) {
        Notification.watch().
            on('change', (data: any) => {
                if (data.fullDocument.for == req.user!.username) res.sseSend!(data);
        });
    }
}