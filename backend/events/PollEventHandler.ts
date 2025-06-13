import {Request, Response} from 'express';
import { Poll } from '../schemas/poll';

export class PollEventHandler {
    static create() {
        return new PollEventHandler();
    }

    async watchPolls(req: Request, res: Response) {
        const pollCode = parseInt(req.query.code as string, 10)
        Poll.watch(
            [{ $match: { 'fullDocument.id': pollCode }}],
            { fullDocument: 'updateLookup' }
        ).on('change', async (data: any) => {
                console.log(data, pollCode);
                if (data.fullDocument && data.fullDocument.id === pollCode) {
                    res.sseSend!(data.fullDocument);
                }
            });
    }
}