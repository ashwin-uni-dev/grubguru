import { Request, Response } from "express";
import {PollService} from "../services/pollService";

export class PollController {
    static create() {
        return new PollController(PollService.create());
    }

    constructor(private pollService: PollService) {}

    async createPoll(req: Request, res: Response) {
        const pollId = await this.pollService.createPoll();
        res.send(pollId);
    }

    async voteFood(req: Request, res: Response) {
        const pollId = Number(req.params.id);
        const food = req.body.food;
        await this.pollService.voteFood(pollId, food);

        res.send({});
    }

    async getPoll(req: Request, res: Response) {
        const poll = await this.pollService.getPoll(Number(req.params.id));
        res.send(poll);
    }

    async vote(req: Request, res: Response) {
        res.send({})
    }

    deletePoll(req: Request, res: Response) {
        this.pollService.deletePoll(req.body.id);
        res.send({});
    }
}