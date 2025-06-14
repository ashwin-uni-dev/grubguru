import { StorePageProcessor } from './storePageProcessor';

const getStoreData = (storeJson: any) => {
    const { name, servesCuisine, openingHoursSpecification, image } = storeJson;
    const { longitude, latitude } = storeJson.geo;
    const { streetAddress: address, postalCode: postcode } = storeJson.address;

    return {
        name,
        image,
        longitude,
        latitude,
        servesCuisine,
        address,
        postcode,
        openingHoursSpecification
    }
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export class StoreDataProcessor extends StorePageProcessor {
    async processStrategy(page: any): Promise<any[]> {
        await delay(1000);
        const storeJson = await page.evaluate(() => {
            return JSON.parse(document.querySelector('[data-testid="store-loaded"] script')?.textContent || '{}');
        });

        return [{ ...getStoreData(storeJson), storeUrl: this.storeUrl }];
    }
}