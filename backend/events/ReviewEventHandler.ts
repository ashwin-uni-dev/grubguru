import {Request, Response} from 'express';
import { Review } from '../schemas/review';

export class ReviewEventHandler {
    static create() {
        return new ReviewEventHandler();
    }

    watchReviews(req: Request, res: Response) {
        Review.watch().
            on('change', (data: any) => {
                if (data.fullDocument.foodId == req.query.foodId) res.sseSend!(data);
            });
    }
}