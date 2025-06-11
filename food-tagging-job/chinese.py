from tag import Tag

# --- Negative Keywords and Hypernyms for Chinese Food ---
# These are terms generally not associated with Chinese cuisine,
# or categories/dishes from other culinary traditions.
negative_hypernyms = {
    # General non-Chinese food categories
    'indian cuisine', 'mexican food', 'italian food', 'french cuisine',
    'american diner food', 'japanese food', 'thai food', 'vietnamese food',
    'mediterranean food', 'middle eastern food', 'african cuisine',
    'south american cuisine', 'european cuisine', 'korean food',
    'british pub grub', 'german cuisine', 'spanish tapas', 'greek food',
    'scandinavian food', 'eastern european food', 'oceanic cuisine',
    'cajun food', 'creole food', 'brazilian food', 'peruvian food',
    'caribbean food', 'australian cuisine', 'new zealand cuisine',
    'canadian poutine', 'irish food', 'scottish food', 'welsh food',
    'balkan food', 'maghreb cuisine', 'levy food', 'central asian food',

    # Specific dishes/ingredients from other cuisines
    'biryani dish', 'taco', 'burrito', 'pizza', 'pasta dish', 'sushi roll',
    'croissant', 'baguette', 'scone', 'pretzel', 'sauerkraut', 'kimchi',
    'ramen noodle', 'pho soup', 'pad thai noodle', 'borscht', 'paella',
    'gnocchi', 'wonton (non-Chinese style)', 'spring roll (non-Chinese style)',
    'shawarma', 'falafel', 'kebab (non-Chinese style)', 'fish and chips',
    'shepherd\'s pie', 'lasagna', 'risotto', 'dumpling (non-Chinese)',
    'gelato', 'crepe', 'macaron', 'waffle', 'pancake', 'hot dog', 'meatloaf',
    'clam chowder', 'jambalaya', 'gumbo', 'bibimbap', 'tostada', 'empanada',
    'schnitzel', 'bouillabaisse', 'coq au vin', 'creme brulee', 'apple pie',
    'doughnut', 'cupcake', 'bagel', 'coleslaw', 'potato salad',
    'butter chicken', 'paneer dish', 'samosa', 'gulab jamun', 'dosa', 'idli',
    'teriyaki chicken', 'tempura', 'udon', 'sashimi', 'tonkatsu', 'poke bowl',
    'banh mi', 'pho', 'tom yum', 'green curry', 'red curry', 'sushi burritos',
    'gyoza', 'yakitori', 'okonomiyaki', 'takoyaki', 'kimchi stew', 'bulgogi',
    'pork belly (non-Chinese style)', 'cheeseburger', 'hot dog', 'fries',
}

negative_keywords = {
    # Specific non-Chinese ingredients or preparation styles
    'curry powder (indian style)', 'garam masala', 'tamarind (non-Chinese use)',
    'chickpeas', 'lentils', 'paneer', 'ghee', 'yogurt (indian style)',
    'balsamic vinegar', 'olives', 'capers', 'parmesan', 'cheddar', 'mozzarella',
    'prosciutto', 'salami', 'pepperoni', 'chorizo', 'bacon', 'ham',
    'pita bread', 'rye bread', 'cornbread', 'tortilla chip', 'tuna', 'salmon',
    'cod', 'shrimp (used in non-Chinese context)', 'avocado', 'blueberry',
    'raspberry', 'strawberry', 'artichoke', 'brussels sprouts', 'asparagus',
    'kale', 'quinoa', 'couscous', 'spaghetti', 'fettuccine', 'linguine',
    'macaroni', 'espresso', 'latte', 'cappuccino', 'iced tea', 'soft drink (generic)',
    'hot chocolate', 'cocktail (generic)', 'beer (western brands)', 'wine (western varieties)',
    'vodka', 'whiskey', 'gin', 'rum', 'maple syrup', 'barbecue sauce (american)',
    'ketchup', 'mustard', 'mayonnaise', 'relish', 'pickles (non-Chinese)',
    'tortilla', 'jalapeño', 'cilantro (non-Chinese usage)', 'oregano', 'basil',
    'rosemary', 'thyme', 'paprika', 'chili con carne', 'nachos', 'burrito bowl',
    'bagel', 'croissant', 'muffin', 'sourdough', 'ciabatta', 'baguette',
    'grits', 'fondue', 'sushi grade', 'raw bar', 'charcuterie',
    'tapas', 'antipasto', 'sushi bar', 'ramen shop', 'pizzeria',
    'deli', 'brasserie', 'bistro', 'steakhouse', 'chophouse', 'brewery',
}


# --- Positive Keywords and Hypernyms for Chinese Food ---
# These are terms strongly associated with Chinese cuisine,
# including dishes, ingredients, spices, and cooking methods.
positive_hypernyms = {
    # General categories of Chinese food
    'chinese cuisine', 'sichuan food', 'cantonese food', 'hunan food',
    'shanghai food', 'beijing food', 'dim sum', 'noodle dish (chinese)',
    'rice dish (chinese)', 'stir-fry dish', 'dumpling (chinese)', 'wonton soup',
    'hot pot', 'congee', 'chop suey style', 'chow mein type', 'lo mein type',
    'chinese banquet', 'chinese takeaway', 'szechuan cuisine', 'hong kong cuisine',
    'taiwanese cuisine', 'malaysian chinese food', 'singaporean chinese food',
    'chinatown restaurant', 'wok cooking', 'chinese street food', 'bamboo steamer food',
    'roasted duck (chinese style)', 'pork dish (chinese)', 'chicken dish (chinese)',
    'seafood dish (chinese)', 'tofu dish (chinese)', 'vegetable dish (chinese)',
}

positive_keywords = {
    # Specific Chinese dishes
    'kung pao chicken', 'general tso\'s chicken', 'sweet and sour pork',
    'mapo tofu', 'peking duck', 'char siu', 'ma po doufu',
    'dan dan noodles', 'wontons', 'spring rolls (chinese)', 'egg rolls',
    'fried rice', 'chow mein', 'lo mein', 'kung pao shrimp',
    'hot and sour soup', 'egg drop soup', 'sesame chicken',
    'orange chicken', 'broccoli beef', 'mu shu pork', 'szechuan chicken',
    'szechuan beef', 'dumplings', 'baozi', 'jiaozi', 'xiaolongbao',
    'congee', 'crispy duck', 'lemon chicken', 'salt and pepper squid',
    'dim sum (specific items like har gow, siu mai, char siu bao)',
    'gong bao ji ding', 'yu xiang rou si', 'kung po chicken',
    'twice cooked pork', 'gan bian si ji dou', 'dry fried green beans',

    # Chinese ingredients and spices
    'soy sauce', 'oyster sauce', 'hoisin sauce', 'fish sauce (chinese use)',
    'sesame oil', 'rice vinegar', 'chili oil', 'five-spice powder',
    'star anise', 'sichuan peppercorns', 'ginger (chinese cooking)',
    'garlic (chinese cooking)', 'scallions', 'bok choy', 'napa cabbage',
    'water chestnuts', 'bamboo shoots', 'mushrooms (shiitake, straw)',
    'tofu', 'bean sprouts', 'egg noodles', 'rice noodles', 'vermicelli',
    'shrimp (chinese use)', 'pork belly', 'duck (chinese)', 'mung beans',
    'black beans (fermented)', 'chili bean paste', 'plum sauce',
    'fermented tofu', 'wood ear mushrooms', 'dried shiitake', 'goji berries',
    'red dates', 'snow fungus', 'dried shrimp', 'dried scallops',
    'glutinous rice', 'long grain rice', 'jasmine rice',

    # Chinese cooking methods and terms
    'wok', 'stir-fry', 'steamed (chinese)', 'deep-fried (chinese)',
    'braised (chinese)', 'roast (chinese)', 'pan-fried (chinese)',
    'chopsticks', 'cleaver (chinese)', 'red cooking', 'velveting',
    'double-boiled', 'wok hei', 'bao (bun)', 'guo (pot)', 'fan (rice)',
    'cai (vegetable/dish)', 'tang (soup)', 'zhong (dumplings/fillings)',
    'restaurant (chinese)', 'takeaway (chinese)', 'delivery (chinese)',

    # Chinese drinks
    'green tea (chinese)', 'oolong tea', 'jasmine tea', 'pu-erh tea',
    'lychee juice', 'chinese beer', 'baijiu', 'rice wine (chinese cooking or drinking)',
    'chrysanthemum tea', 'barley water (chinese)', 'herbal tea (chinese)',
}

chinese_cuisine_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)
