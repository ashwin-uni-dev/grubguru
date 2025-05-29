import { Request, Response } from "express";

export class UsersController {
    static create() {
        return new UsersController();
    }

    async getPresets(req: Request, res: Response) {
        res.send({
            presets: [
                {name: 'Hot & Spicy'},
                {name: 'Cheap & Quick'},
                {name: 'High Protein Veggie'}
            ]
        })
    }
}