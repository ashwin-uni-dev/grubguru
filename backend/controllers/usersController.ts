import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UsersController {
    static create() {
        return new UsersController(UserService.create());
    }

    constructor(private userService: UserService) {}

    async getPresets(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const presets = await this.userService.getPresets(id);
        res.send({ presets });
    }

    async addPreset(req: Request, res: Response){
        const id = parseInt(req.params.id);
        await this.userService.addPreset(id, req.body);
        res.send({ success: true })
    }
}