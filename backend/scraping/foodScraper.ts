import { StoreProcessor } from "./processors/simpleProcessors";
import { FoodItemProcessor } from "./processors/foodItemProcessor";
import { Scraper } from "./scraper";
import {SimpleLogger} from "./loggers/simpleLogger";
import {MongoLogger} from "./loggers/mongoLogger";
import {FoodItem, IFoodItem} from "../schemas/foodItem";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {StoreDataProcessor} from "./processors/storeDataProcessor";
import {IStore, Store} from "../schemas/store";
import {StorePageProcessor} from "./processors/storePageProcessor";
dotenv.config();

const LOCATION_URL = 'https://www.ubereats.com/gb/neighborhood/south-kensington-london-eng';
const scraper = Scraper.create();

const consoleLogger = new SimpleLogger();
const foodItemLogger = new MongoLogger<IFoodItem>(FoodItem);
const storeLogger = new MongoLogger<IStore>(Store);

(async () => {
  await mongoose.connect(process.env.MONGO_URI || '');

  const storeProcessor = new StoreProcessor(scraper, consoleLogger, consoleLogger);
  const foodItemProcessor = new FoodItemProcessor(scraper, consoleLogger, foodItemLogger);
  const storeDataProcessor = new StoreDataProcessor(scraper, consoleLogger, storeLogger);

  const pagePipeline: StorePageProcessor[] = [
      foodItemProcessor,
      storeDataProcessor,
  ];

  const stores = await storeProcessor.process(LOCATION_URL);

  for (let storeUrl of stores) {
    for (const processor of pagePipeline) {
      processor.setStoreUrl(storeUrl)
      await processor.process(storeUrl);
    }
  }

  await scraper.close();
})();
