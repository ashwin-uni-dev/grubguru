import {NextFunction, Request, Response} from "express";

declare global {
    namespace Express {
        interface Request {
            userId?: number;
        }
    }
}

export const userIdParser = (req: Request, res: Response, next: NextFunction) => {
    // Ensure that req.params.id exists and is a string
    const idParam = req.params.id;

    if (typeof idParam !== 'string') {
        res.status(400).send({ error: 'User ID is missing or invalid in URL.' });
        return;
    }

    const id = parseInt(idParam, 10);

    if (isNaN(id)) {
        res.status(400).send({ error: 'Invalid user ID format. Must be a number.' });
        return;
    }

    req.userId = id;
    next();
};