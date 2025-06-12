import {Model, Types} from 'mongoose';
import {IReview, Review} from "../schemas/review";
import {IPoll, Poll} from "../schemas/poll";

export class PollService {
    static create() {
        return new PollService(Poll);
    }

    constructor(
        private pollModel: Model<IPoll>
    ) {}

    async createPoll() {
        const id = Math.floor(Math.random() * Math.pow(10, 5));
        const poll = new this.pollModel({ id });

        await poll.save();
        return id;
    }
}