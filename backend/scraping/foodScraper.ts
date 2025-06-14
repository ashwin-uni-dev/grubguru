import { StoreProcessor, NeighborhoodProcessor } from "./processors/simpleProcessors";
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
import { PageResult } from "./processors/pageProcessor";
import * as fs from 'node:fs/promises';

dotenv.config();

const scraper = Scraper.create();

const consoleLogger = new SimpleLogger();
const foodItemLogger = new MongoLogger<IFoodItem>(FoodItem);
const storeLogger = new MongoLogger<IStore>(Store);
const emptyLogger = {
  log: (toLog: any[]) => {}
}

const readStoresFromFile = async (filePath: string): Promise<string[]> => {
  try {
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
    const stores = fileContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    return stores;
  } catch (error) {
    console.error(`Error reading stores from ${filePath}:`, error);
    return [];
  }
};

const storeValidator = (store: any) => {
  const { servesCuisine, name } = store[0];
  const nameLower = name.toLowerCase();

  if (nameLower.includes('wine') || nameLower.includes('off licence') || nameLower.includes('supermarket')) return false;

  for (const cuisine of servesCuisine) {
    const cuisineLower = cuisine.toLowerCase();
    if (cuisineLower.includes('grocer') || cuisineLower.includes('grocery') || cuisineLower.includes('supermarket') ||
        cuisineLower.includes('convenience')) {
      return false;
    }
  }

  return true;
}

const scrapeStores = async (stores: string[]) => {

  const foodItemProcessor = new FoodItemProcessor(scraper, consoleLogger, foodItemLogger);
  const storeDataProcessor = new StoreDataProcessor(scraper, consoleLogger, storeLogger);

  for (let storeUrl of stores) {
    console.log('processing: ', storeUrl);
    storeDataProcessor.setStoreUrl(storeUrl);
    const {valid}: PageResult = await storeDataProcessor.process(storeUrl, storeValidator);
    if (valid) {
      foodItemProcessor.setStoreUrl(storeUrl);
      await foodItemProcessor.process(storeUrl);
      console.log('processed: ', storeUrl);
    }
  }
}

const scrapeLocation = async (LOCATION_URL: string, processedStoreUrls: Set<string>) => {
  await mongoose.connect(process.env.MONGO_URI || '');

  const storeProcessor = new StoreProcessor(scraper, consoleLogger, emptyLogger);
  const neighborhoodProcessor = new NeighborhoodProcessor(scraper, consoleLogger, emptyLogger);

  console.log('fetching the stores from location URL...')
  let {result: stores} = await storeProcessor.process(LOCATION_URL);

  console.log('Filtering out stores already processed in this run...');
  const newStoresToProcess = stores.filter((storeUrl: string) => !processedStoreUrls.has(storeUrl));

  await scrapeStores(newStoresToProcess);

  const {result: newLocations} = await neighborhoodProcessor.process(LOCATION_URL);

  await scraper.close();
  return newLocations;
};


const scrapeSouthKen = async () => {
  const processedStoreUrls = new Set<string>();
  const processedLocations = new Set<string>();

  const locationsStack: string[] = [
    'https://www.ubereats.com/gb/neighborhood/south-kensington-london-eng'
  ];

  while (locationsStack.length > 0) {
    const locationUrl = locationsStack.pop();

    if (!locationUrl || processedLocations.has(locationUrl)) {
      continue;
    }

    processedLocations.add(locationUrl);

    console.log(`Starting scrape for location: ${locationUrl}`);
    const newLocations = await scrapeLocation(locationUrl, processedStoreUrls);

    for (const newLoc of newLocations) {
      if (!processedLocations.has(newLoc)) {
        locationsStack.push(newLoc);
      }
    }

    console.log(`Finished scrape for location: ${locationUrl}`);
  }

  console.log('All locations processed.');
  console.log(`Total unique stores processed in this run: ${processedStoreUrls.size}`);
  console.log(`Total unique locations processed in this run: ${processedLocations.size}`);

  await scraper.close();
  await mongoose.disconnect();
}

const scrapeStoresTxt = async () => {
  await mongoose.connect(process.env.MONGO_URI || '');
  const stores: string[] = await readStoresFromFile("./scraping/stores.txt");

  await scrapeStores(stores);
}

scrapeStoresTxt();