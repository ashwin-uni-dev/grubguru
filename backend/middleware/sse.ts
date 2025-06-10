import {Request, Response, NextFunction} from "express";

declare global {
    namespace Express {
        interface Response {
            sseSend?: (data: any) => void;
        }
    }
}

export const sseMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    res.write(`data: Connected to server user id ${req.userId!}\n\n`);

    res.sseSend = (data: any) => {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    req.on('close', () => {
       console.log('Client disconnected');
        res.end();
    });

    next();
}
