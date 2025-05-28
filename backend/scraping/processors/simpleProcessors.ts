import {PageProcessor} from "./pageProcessor";

// Gets all URLs on a page passed through a given filter
abstract class URLProcessor extends PageProcessor {
    abstract filter(link: string): boolean;

    async processStrategy(page: any): Promise<string[]> {
        const links: string[] = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
                .map(a => a.href);
        })

        return links.filter(this.filter);
    }
}

// Fetches category URLs from a page
export class CategoryProcessor extends URLProcessor {
    filter(link: string): boolean {
        return link.includes('/category/');
    }
}

// Fetches store URLs from a page
export class StoreProcessor extends URLProcessor {
    filter(link: string): boolean {
        return link.includes('/store/');
    }
}