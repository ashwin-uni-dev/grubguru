import { Scraper } from "./scraper";

abstract class PageProcessor {
    constructor(
        private scraper: Scraper
    ) {}

    async process(url: string): Promise<any[]> {
        try {
            const page = await this.scraper.getPage(url);
            return await this.processStrategy(page);
        } catch {
            return Promise.resolve([]);
        }
    }

    abstract processStrategy(page: any): Promise<any[]>;
}

// Fetches category URLs from a page
export class CategoryProcessor extends PageProcessor {
    async processStrategy(page: any): Promise<string[]> {
        return await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
                        .map(a => a.href)
                        .filter(link => link.includes('/category/'));
        })
    }
}

// Fetches store URLs from a page
export class StoreProcessor extends PageProcessor {
    async processStrategy(page: any): Promise<any[]> {
        return await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
                        .map(a => a.href)
                        .filter(link => link.includes('/store/'));
        })
    }
}

// Fetches store info and food items from a store page
export class FoodItemProcessor extends PageProcessor {
    async processStrategy(page: any): Promise<any[]> {
        return await page.evaluate(() => {
            const storeInfo = JSON.parse(document.querySelector('[data-testid="store-loaded"] script')?.textContent || '{}');
            if (Object.keys(storeInfo).length == 0) return [];

            const { name, servesCuisine, openingHoursSpecification } = storeInfo;
            const { longitude, latitude } = storeInfo.geo;
            const { streetAddress: address, postalCode: postcode } = storeInfo.address;
            const storeData = {
                name,
                longitude,
                latitude,
                servesCuisine,
                address,
                postcode,
                openingHoursSpecification
            }

            return Array.from(document.querySelectorAll('a'))
                        .flatMap(a => {
                            const spans = Array.from(a.querySelectorAll('span'));
                            const priceIndex = spans.findIndex(span => span.textContent?.includes("£"));
                            if (priceIndex == -1) return [];

                            const nameSpan = spans[priceIndex - 1];
                            const priceSpan = spans[priceIndex];
                            const descSpan = spans[spans.length - 1];
                            const img = a.querySelector('img')?.src;

                            return {
                                storeData,
                                name: nameSpan ? nameSpan.textContent : '',
                                price: priceSpan ? priceSpan.textContent : '',
                                desc: (descSpan && descSpan.textContent) ? 
                                      (descSpan.textContent.length >= 15 ? descSpan.textContent : '') : '',
                                img,
                                uberUrl: a.href,
                            };
                        });
        })
    }
}