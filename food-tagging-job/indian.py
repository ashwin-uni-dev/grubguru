from tag import Tag

# --- Negative Keywords and Hypernyms for Indian Cuisine ---
# These are terms generally not associated with Indian cuisine,
# or categories/dishes from other culinary traditions.
negative_hypernyms = {
    # General non-Indian food categories
    'pasta dish', 'sushi roll', 'taco', 'burrito', 'pizza', 'burger',
    'french pastry', 'mediterranean mezze', 'mexican food', 'italian food',
    'japanese food', 'chinese food', 'thai food', 'french cuisine', 'american diner food',
    'european cuisine', 'african cuisine', 'south american cuisine',
    'oceanic cuisine', 'scandinavian food', 'eastern european food', 'middle eastern food',
    'caribbean food', 'korean food', 'vietnamese food', 'greek food',
    'spanish tapas', 'british pub grub', 'german wurst', 'canadian poutine',

    # Specific dishes/ingredients from other cuisines
    'croissant', 'baguette', 'scone', 'pretzel', 'sauerkraut', 'kimchi',
    'tortilla', 'quesadilla', 'enchilada', 'fajita', 'sashimi', 'udon',
    'ramen', 'pho', 'sushi', 'pad thai', 'borscht', 'paella', 'gnocchi',
    'dim sum', 'wonton', 'spring roll', 'shawarma', 'falafel', 'kebab (non-Indian style)',
    'fish and chips', 'shepherd\'s pie', 'lasagna', 'risotto', 'dumpling',
    'gelato', 'crepe', 'macaron', 'waffle', 'pancake', 'hot dog', 'meatloaf',
    'clam chowder', 'jambalaya', 'gumbo', 'bibimbap', 'tostada', 'empanada',
    'schnitzel', 'bouillabaisse', 'coq au vin', 'creme brulee', 'apple pie',
    'doughnut', 'cupcake', 'bagel', 'coleslaw', 'potato salad', 'coleslaw',
}

negative_keywords = {
    # Specific non-Indian ingredients or preparation styles
    'soy sauce', 'teriyaki', 'wasabi', 'miso', 'sriracha', 'tabasco',
    'ketchup', 'mustard', 'mayonnaise', 'relish', 'pickles (non-Indian)',
    'balsamic vinegar', 'olives', 'capers', 'parmesan', 'cheddar', 'mozzarella',
    'prosciutto', 'salami', 'pepperoni', 'chorizo', 'bacon', 'ham',
    'pita', 'baguette', 'rye bread', 'cornbread', 'tortilla chip',
    'tuna', 'salmon', 'cod', 'shrimp (used in non-Indian context)',
    'avocado', 'blueberry', 'raspberry', 'strawberry', 'artichoke',
    'brussels sprouts', 'asparagus', 'kale', 'quinoa', 'couscous',
    'pasta', 'spaghetti', 'fettuccine', 'linguine', 'macaroni',
    'espresso', 'latte', 'cappuccino', 'iced tea', 'soft drink (generic)',
    'hot chocolate', 'cocktail (generic)', 'beer (western brands)', 'wine (western varieties)',
    'vodka', 'whiskey', 'gin', 'rum',

    # Cooking methods or terms not typically Indian
    'stir-fry', 'deep dish', 'thin crust', 'al dente', 'grits', 'fondue',
    'bain-marie', 'flambe', 'sushi grade', 'raw bar', 'charcuterie',
    'tapas', 'antipasto', 'sushi bar', 'ramen shop', 'pizzeria',
    'deli', 'brasserie', 'bistro', 'steakhouse', 'chophouse', 'brewery',
}


# --- Positive Keywords and Hypernyms for Indian Cuisine ---
# These are terms strongly associated with Indian cuisine,
# including dishes, ingredients, spices, and cooking methods.
positive_hypernyms = {
    # General categories of Indian food
    'indian cuisine', 'south asian food', 'curry house', 'indian restaurant',
    'vegetarian indian food', 'north indian food', 'south indian food',
    'bengali cuisine', 'punjabi cuisine', 'gujarati cuisine', 'rajasthani cuisine',
    'maharashtrian cuisine', 'kashmiri cuisine', 'hyderabadi cuisine',
    'goan cuisine', 'kerala cuisine', 'tamil cuisine', 'andhra cuisine',
    'indian street food', 'thali', 'biryani dish', 'tandoori dish',
    'dal preparation', 'roti type', 'naan bread', 'paratha', 'samosa type',
    'pakora type', 'indian dessert', 'indian snack', 'indian drink',
    'lentil dish', 'chickpea dish', 'paneer dish', 'spice blend',
}

positive_keywords = {
    # Specific Indian dishes
    'biryani', 'curry', 'masala', 'tikka masala', 'butter chicken', 'saag paneer',
    'aloo gobi', 'chana masala', 'dal makhani', 'rajma', 'malai kofta',
    'vindaloo', 'rogan josh', 'korma', 'jalfrezi', 'dosa', 'idli', 'vada',
    'sambar', 'rasam', 'uttapam', 'appam', 'puttu', 'parotta', 'thali',
    'samosa', 'pakora', 'bhaji', 'pani puri', 'chaat', 'bhel puri',
    'pav bhaji', 'vada pav', 'dhokla', 'khandvi', 'fafda', 'jalebi',
    'gulab jamun', 'rasgulla', 'kulfi', 'gajar ka halwa', 'barfi',
    'naan', 'roti', 'chapati', 'paratha', 'puri', 'bhatura', 'kulcha',

    # Indian ingredients and spices
    'paneer', 'ghee', 'curd',
    'turmeric', 'cumin', 'coriander', 'garam masala', 'cardamom', 'cloves',
    'fenugreek', 'mustard seeds', 'asafoetida', 'masala'
    'chilli powder', 'kashmiri chilli', 'ajwain', 'fennel seeds', 'carom seeds',
    'curry leaves', 'tamarind', 'mango (unripe or ripe in indian dishes)',
    'chickpeas', 'lentils', 'basmati rice', 'jaggery', 'cashews (indian use)',
    'almonds (indian use)', 'pistachios (indian use)', 'saffron', 'rose water',
    'gram flour', 'besan', 'semolina', 'suji', 'fenugreek leaves', 'kasoori methi',

    # Indian cooking methods and terms
    'tandoor', 'dum cooking', 'handi', 'tadka', 'bhuna', 'slow-cooked (indian)',
    'spicy (indian context)', 'aromatic (indian spices)', 'fragrant (indian food)',
    'pickle (indian achar)', 'chutney', 'raita', 'masala (spice blend)',
    'takeaway (indian)', 'delivery (indian)', 'dine-in (indian)', 'buffet (indian)',

    # Indian drinks
    'chai', 'lassi', 'masala chai', 'buttermilk (indian)', 'nimbu pani',
    'aam panna', 'jaljeera',
}

# --- Create the Tag instance for Indian Cuisine ---
indian_cuisine_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)