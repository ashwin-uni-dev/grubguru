import {User} from "../schemas/user";
import {Request, Response} from 'express';

export class NotificationEventHandler {
    static create() {
        return new NotificationEventHandler();
    }

    watchUser(req: Request, res: Response) {
        const pipeline = [
            {
                $match: {
                    id: req.userId!
                }
            }
        ];

        User.watch(pipeline).
            on('change', (data: any) => res.sseSend!(data));
    }
}