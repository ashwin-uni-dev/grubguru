import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import randomUseragent from 'random-useragent';

puppeteer.use(StealthPlugin());

async function autoScroll(page: any) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve(true);
                }
            }, 100);
        });
    });
}

export class Scraper {
    private browser: any;

    static create() {
        return new Scraper();
    }

    async setupBrowser(): Promise<void> {
        const args = [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled',
        ];

        this.browser = await puppeteer.launch({
            headless: true,
            args,
            executablePath: '/usr/bin/chromium-browser'
        });
    }

    async getPage(url: string) {
        if (!this.browser) await this.setupBrowser();

        const userAgent = randomUseragent.getRandom() || 'Mozilla/5.0';

        const page = await this.browser.newPage();
        await page.setUserAgent(userAgent);
        await page.setViewport({ width: 1280, height: 800 });

        await page.goto(url, { waitUntil: 'networkidle2', timeout: 40000 });
        await autoScroll(page);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return page;
    }

    async close() {
        await this.browser.close()
    }
}