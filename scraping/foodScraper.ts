import { StoreProcessor } from "./processors/simpleProcessors";
import { FoodItemProcessor } from "./processors/foodItemProcessor";
import { Scraper } from "./scraper";
import {SimpleLogger} from "./loggers/simpleLogger";
import {MongoLogger} from "./loggers/mongoLogger";
import {FoodItem, IFoodItem} from "./schemas/foodItem";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const LOCATION_URL = 'https://www.ubereats.com/gb/neighborhood/south-kensington-london-eng';
const scraper = Scraper.create();
const errorLogger = new SimpleLogger();
const resultLogger = new MongoLogger<IFoodItem>(FoodItem);

(async () => {
  await mongoose.connect(process.env.MONGO_URI || '');

  const storeProcessor = new StoreProcessor(scraper, errorLogger, errorLogger);
  const foodItemProcessor = new FoodItemProcessor(scraper, errorLogger, resultLogger);

  const stores = await storeProcessor.process(LOCATION_URL);
  for (let storeUrl of stores) {
    const foodItems = await foodItemProcessor.process(storeUrl);
  }

  await scraper.close();
})();
