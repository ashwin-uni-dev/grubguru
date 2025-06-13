import {Model, Types} from 'mongoose';
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

    async voteFood(pollCode: number, food: any) {
        const poll = await this.pollModel.findOne({ id: pollCode });

        const foodStore = food.storeInfo;
        const storeUrlKey = foodStore.storeUrl;

        if (poll!.votes[storeUrlKey]) {
            poll!.votes[storeUrlKey].count += 1;
        } else {
            poll!.votes[storeUrlKey] = {
                count: 1,
                storeInfo: foodStore
            };
        }

        poll!.markModified('votes');
        await poll!.save();
    }

    deletePoll(id: number) {
        this.pollModel.deleteOne({ id });
    }

    async getPoll(id: number) {
        return this.pollModel.findOne({ id })
    }
}