import { StoreProcessor } from "./processors/simpleProcessors";
import { FoodItemProcessor } from "./processors/foodItemProcessor";
import { Scraper } from "./scraper";

const LOCATION_URL = 'https://www.ubereats.com/gb/neighborhood/south-kensington-london-eng';
const scraper = Scraper.create();

(async () => {
  const storeProcessor = new StoreProcessor(scraper);
  const foodItemProcessor = new FoodItemProcessor(scraper);

  const stores = await storeProcessor.process(LOCATION_URL);
  for (let storeUrl of stores) {
    const foodItems = await foodItemProcessor.process(storeUrl);
    console.log(foodItems);
  }

  await scraper.close();
})();
