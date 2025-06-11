from tagger_setup import food_tagger
from pymongo import MongoClient

client = MongoClient('mongodb+srv://ab4623:!!Cricket123!!@grubguru.yn7aupf.mongodb.net/?retryWrites=true&w=majority&appName=grubguru')
db = client['test']
food_items = db['fooditems']

def tag_foods():
    query = {
        'tags': []
    }

    foods_to_update = food_items.find({})
    update_count = 0

    for food in foods_to_update:  
        text = f"{food.get('name')}. {food.get('desc')}"
        tags = []

        if food.get('name') != '':
            tags = food_tagger.get_tags(text)

        food_items.update_one(
            { '_id': food.get('_id') },
            { 
                '$set': {
                    'tags': tags
                }
            }
        )

        update_count += 1
        print (f"Updated food {food.get('name')}. Update count: {update_count}")

tag_foods()