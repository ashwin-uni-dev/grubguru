import { Scraper } from "../scraper";

export abstract class PageProcessor {
    constructor(
        private scraper: Scraper
    ) {}

    async process(url: string): Promise<any[]> {
        try {
            const page = await this.scraper.getPage(url);
            const result = await this.processStrategy(page);

            await page.close();
            return result;
        } catch (e) {
            console.log(e);
            return Promise.resolve([]);
        }
    }

    abstract processStrategy(page: any): Promise<any[]>;
}