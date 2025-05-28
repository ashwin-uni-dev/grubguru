import { StorePageProcessor } from './storePageProcessor';

interface RawFoodData {
    name?: string
    price?: string
    desc?: string
    imgUrl?: string
    uberUrl: string
}

const isObjectEmpty = (o: any) => Object.keys(o).length == 0;

const processFoodItem = (rawFoodInfo: RawFoodData) => {
    const { name, price, desc, imgUrl, uberUrl } = rawFoodInfo;
    const priceAsNumber = Number(price?.trim().replace('£', ''));

    if (!priceAsNumber) {
        return {};
    }

    return {
        name: name?.trim() || '',
        price: priceAsNumber,
        description: (desc && desc.length >= 15) ? desc.trim() : '',
        imgUrl,
        uberUrl,
    };
};

// Fetches store info and food items from a store page
export class FoodItemProcessor extends StorePageProcessor {
    async processStrategy(page: any): Promise<any[]> {
        const rawFoodItemData = await page.evaluate(() => {
            const anchorContainers = Array.from(document.querySelectorAll('a'));

            const getFoodInfo = (a: HTMLAnchorElement) => {
                const spans = Array.from(a.querySelectorAll('span'));
                const priceIndex = spans.findIndex(span => span.textContent
                    ?.includes("£"));

                const priceSpan = spans[priceIndex];

                return {
                    name: (priceSpan && spans[spans.indexOf(priceSpan) - 1])?.textContent || undefined,
                    price: priceSpan?.textContent || undefined,
                    desc: spans.length > 0 ? spans[spans.length - 1]?.textContent || undefined : undefined,
                    imgUrl: a.querySelector('img')?.src || undefined,
                    uberUrl: a.href,
                };
            }

            return anchorContainers.map(getFoodInfo);
        });

        return rawFoodItemData.flatMap((item: RawFoodData) => {
            const foodInfo = processFoodItem(item);
            if (isObjectEmpty(foodInfo)) return [];

            return { ...foodInfo, storeUrl: this.storeUrl };
        });
    }
}