import { Scraper } from "../scraper";
import {Logger} from "../loggers/logger";

export interface PageResult {
    result: any[]
    valid: boolean
}

export abstract class PageProcessor {
    constructor(
        private scraper: Scraper,
        private errorLogger: Logger,
        private resultLogger: Logger,
    ) {}

    async process(url: string, resultValidator: (result: any) => boolean = (x) => true) : Promise<PageResult> {
        try {
            const page = await this.scraper.getPage(url);
            const result = await this.processStrategy(page);
            await page.close();
            const valid = resultValidator(result)
            if (valid) this.resultLogger.log(result);

            return {
                result,
                valid
            };
        } catch (e) {
            this.errorLogger.log([e]);
            return Promise.resolve({ result: [], valid: false });
        }
    }

    abstract processStrategy(page: any): Promise<any[]>;
}