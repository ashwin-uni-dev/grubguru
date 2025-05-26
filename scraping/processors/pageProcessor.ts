import { Scraper } from "../scraper";

export abstract class PageProcessor {
    constructor(
        private scraper: Scraper
    ) {}

    async process(url: string): Promise<any[]> {
        try {
            const page = await this.scraper.getPage(url);
            return await this.processStrategy(page);
        } catch (e) {
            console.log(e);
            return Promise.resolve([]);
        }
    }

    abstract processStrategy(page: any): Promise<any[]>;
}