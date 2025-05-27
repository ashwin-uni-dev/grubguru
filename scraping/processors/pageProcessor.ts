import { Scraper } from "../scraper";
import {Logger} from "../loggers/logger";

export abstract class PageProcessor {
    constructor(
        private scraper: Scraper,
        private errorLogger: Logger,
        private resultLogger: Logger,
    ) {}

    async process(url: string): Promise<any[]> {
        try {
            const page = await this.scraper.getPage(url);
            const result = await this.processStrategy(page);
            await page.close();

            this.resultLogger.log(result);
            return result;
        } catch (e) {
            this.errorLogger.log([e]);
            return Promise.resolve([]);
        }
    }

    abstract processStrategy(page: any): Promise<any[]>;
}