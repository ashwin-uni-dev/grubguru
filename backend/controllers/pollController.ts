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

    async getPoll(req: Request, res: Response) {
        res.send({});
    }

    async vote(req: Request, res: Response) {
        res.send({})
    }
}