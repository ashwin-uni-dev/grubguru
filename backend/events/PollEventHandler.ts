import {Request, Response} from 'express';
import { Poll } from '../schemas/poll';

export class PollEventHandler {
    static create() {
        return new PollEventHandler();
    }

    watchPolls(req: Request, res: Response) {
        Poll.watch().
            on('change', async (data: any) => {
                const doc = await Poll.findOne({ _id: data.documentKey._id });
                if (doc!.id == req.query.code) res.sseSend!(doc);
            });
    }
}