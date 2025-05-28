import { StorePageProcessor } from './storePageProcessor';

const getStoreData = (storeJson: any) => {
    const { name, servesCuisine, openingHoursSpecification } = storeJson;
    const { longitude, latitude } = storeJson.geo;
    const { streetAddress: address, postalCode: postcode } = storeJson.address;

    return {
        name,
        longitude,
        latitude,
        servesCuisine,
        address,
        postcode,
        openingHoursSpecification
    }
}

// Fetches store info and food items from a store page
export class StoreDataProcessor extends StorePageProcessor {
    async processStrategy(page: any): Promise<any[]> {
        const storeJson = await page.evaluate(() => {
            return JSON.parse(document.querySelector('[data-testid="store-loaded"] script')?.textContent || '{}');
        });

        return [{ ...getStoreData(storeJson), storeUrl: this.storeUrl }];
    }
}