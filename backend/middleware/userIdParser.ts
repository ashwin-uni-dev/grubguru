import {NextFunction, Request, Response} from "express";

declare global {
    namespace Express {
        interface Request {
            userId?: number;
        }
    }
}

export const userIdParser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated!()) {
        res.status(401).send({ redirect: '/login' });
        return;
    }

    console.log(req.user!.id);

    req.userId = req.user!.id;
    next();
};