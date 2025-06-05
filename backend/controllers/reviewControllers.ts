import { Request, Response } from "express";
import {ReviewService} from "../services/reviewService";

export class ReviewController {
    static create() {
        return new ReviewController(ReviewService.create());
    }

    constructor(private reviewService: ReviewService) {}

    async createReview(req: Request, res: Response) {
        const { review, foodId } = req.body;
        const author = req.user!.username;

        await this.reviewService.createReview(author, review, foodId);
        res.status(200).send();
    }

    async getReviews(req: Request, res: Response) {
        const foodId= req.params.id;
        const reviews = await this.reviewService.getReviews(foodId);
        res.send(reviews);
    }
}