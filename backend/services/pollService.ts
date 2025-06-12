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

    async addOption(pollCode: number, food: any) {
        const poll = await this.pollModel.findOne({ id: pollCode });
        poll!.options.push(food.storeInfo);
        await poll!.save();
    }

    async vote(pollCode: number, food: any) {}

    deletePoll(id: number) {
        this.pollModel.deleteOne({ id });
    }

    async getPoll(id: number) {
        return this.pollModel.findOne({ id })
    }
}