import {PageProcessor} from "./pageProcessor";

export abstract class StorePageProcessor extends PageProcessor {
    protected storeUrl: string = '';

    setStoreUrl(url: string) {
        this.storeUrl = url;
    }
}