from tag import Tag

negative_hypernyms = {
    # Types of dining/food that are not fast food
    'fine dining', 'gourmet meal', 'haute cuisine', 'artisanal food',
    'slow food', 'home-cooked meal', 'homemade dish', 'sit-down restaurant',
    'Michelin-starred restaurant', 'farm-to-table', 'boutique restaurant',
    'specialty cuisine', 'ethnic restaurant', 'traditional food',
    'vegetarian restaurant', 'vegan restaurant', 'sushi bar', 'ramen shop',
    'steakhouse', 'seafood restaurant', 'bistro', 'brasserie',
    'pizzeria (traditional)', 'trattoria', 'omakase', 'tasting menu',
    'buffet (non-fast food)', 'catering service', 'meal kit',
    'bakery (artisanal)', 'patisserie', 'delicatessen (gourmet)',
    'juice bar (fresh)', 'smoothie shop (fresh)', 'tea house', 'coffee shop (specialty)',
}

negative_keywords = {
    # Specific dishes, ingredients, or terms not typically found in fast food
    'foie gras', 'caviar', 'truffle', 'oysters', 'escargot', 'lobster thermidor',
    'coq au vin', 'bouillabaisse', 'sushi', 'sashimi', 'ramen (gourmet)',
    'paella', 'tagliatelle', 'risotto', 'gnocchi', 'beef wellington',
    'duck confit', 'crème brûlée', 'soufflé', 'crepe (dessert)',
    'artisanal bread', 'sourdough bread', 'freshly baked pastry',
    'organic vegetables', 'heirloom tomatoes', 'grass-fed beef',
    'wild-caught salmon', 'free-range chicken', 'aged cheese',
    'hand-pulled noodles', 'slow-roasted meats', 'braised short ribs',
    'hand-rolled pasta', 'homemade sauce', 'from scratch',
    'chef\'s special', 'daily catch', 'seasonal menu',
    'sommelier', 'wine pairing', 'degustation', 'prix fixe',
    'reservations required', 'white tablecloth', 'linen napkins',
    'table service', 'waiter service', 'à la carte',
    'espresso (single origin)', 'pour-over coffee', 'loose leaf tea',
    'craft beer (microbrewery)', 'fine wine', 'single malt scotch',
    'cocktail bar', 'freshly squeezed juice', 'smoothie bowl',
    'quinoa salad', 'kale salad', 'avocado toast', 'chia pudding',
    'acai bowl', 'gourmet burger (non-fast food style)', 'artisanal pizza',
    'wood-fired pizza', 'farm fresh eggs', 'local ingredients',
}


# --- Positive Keywords and Hypernyms for Fast Food ---
# These are terms strongly associated with fast food,
# including popular items, chain types, and service models.
positive_hypernyms = {
    # General categories of fast food
    'fast food', 'quick service restaurant', 'drive-thru', 'burger joint',
    'fried chicken chain', 'pizza delivery', 'sandwich chain', 'taco chain',
    'doughnut shop', 'coffee chain', 'ice cream parlor (chain)',
    'fast casual (some overlap)', 'takeout restaurant', 'delivery service (fast food)',
    'snack bar', 'food court eatery', 'chain restaurant', 'kids meal',
    'value meal', 'combo meal', 'drive-in', 'diner (classic american fast food)',
}

positive_keywords = {
    # Specific fast food items, brands, and terms
    'burger', 'cheeseburger', 'fries', 'french fries', 'nuggets',
    'chicken nuggets', 'fried chicken', 'chicken sandwich', 'taco', 'burrito',
    'quesadilla', 'pizza slice', 'hot dog', 'onion rings', 'milkshake',
    'soft drink', 'soda', 'cola', 'fizzy drink', 'shake', 'ice cream cone',
    'doughnut', 'cookie (fast food style)', 'muffin (fast food style)',
    'breakfast sandwich', 'hash brown', 'pancake (fast food)', 'waffle (fast food)',
    'chicken strip', 'fish sandwich', 'wrap (fast food)', 'salad (fast food style)',
    'chili (fast food)', 'sloppy joe', 'corndog', 'sub sandwich', 'footlong',

    # Common fast food chain names and related terms
    'McDonald\'s', 'Burger King', 'KFC', 'Subway', 'Taco Bell',
    'Wendy\'s', 'Chick-fil-A', 'Starbucks (coffee chain)', 'Dunkin\' Donuts',
    'Pizza Hut', 'Domino\'s', 'Five Guys', 'Shake Shack', 'In-N-Out Burger',
    'Arby\'s', 'Sonic Drive-In', 'Dairy Queen', 'Popeyes', 'Carl\'s Jr.',
    'Hardee\'s', 'Panda Express', 'Chipotle (fast casual)', 'Qdoba (fast casual)',
    'Greggs', 'Pret A Manger (some overlap)', 'Wimpy',
    'drive-thru', 'takeaway', 'carryout', 'delivery', 'combo', 'meal deal',
    'super size', 'big mac', 'whopper', 'zinger', 'crunchwrap supreme',
    'french fry', 'soda pop', 'coke', 'pepsi', 'sprite', 'dr pepper',
    'drive-up', 'quick bite', 'on the go', 'express food', 'cheap eats',
    'convenience food', 'pre-made', 'packaged food (fast food context)',
    'counter service', 'tray (fast food)', 'paper bag (fast food)',
    'disposable cup', 'plastic cutlery', 'loyalty program (fast food)',
}

# --- Create the Tag instance for Fast Food ---
fast_food_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)