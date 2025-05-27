import { Logger } from "./logger";

export class SimpleLogger implements Logger {
    log(toLog: any[]) {
        toLog.forEach(log => console.log(log));
    }
}