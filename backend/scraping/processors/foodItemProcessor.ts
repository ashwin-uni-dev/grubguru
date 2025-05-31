import { StorePageProcessor } from './storePageProcessor';

interface RawFoodData {
    name?: string
    price?: string
    desc?: string
    imgUrl?: string
    kcal?: string
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
        desc: (desc && desc.length >= 15) ? desc.trim() : '',
        imgUrl,
        kcal: rawFoodInfo.kcal ? Number(rawFoodInfo.kcal.trim().replace('kcal', '')) : undefined,
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
                const kcalIndex = spans.findIndex(span => span.textContent
                    ?.includes("kcal"));

                const priceSpan = spans[priceIndex];
                const kcalSpan = spans[kcalIndex];
                const otherSpans = spans.filter(span => span !== priceSpan);

                let longestDescSpan: HTMLSpanElement | undefined;
                let longestLength = 0;

                otherSpans.forEach(span => {
                    const text = span.textContent || '';
                    if (text.length > longestLength) {
                        longestLength = text.length;
                        longestDescSpan = span;
                    }
                });

                return {
                    name: (priceSpan && spans[spans.indexOf(priceSpan) - 1])?.textContent || undefined,
                    price: priceSpan?.textContent || undefined,
                    desc: longestDescSpan?.textContent || undefined, // Use the longest span's textContent
                    imgUrl: a.querySelector('img')?.src || undefined,
                    kcal: kcalSpan?.textContent || undefined,
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