from tag import Tag

# --- Negative Keywords and Hypernyms for 'Meal' ---
# These are terms generally NOT associated with a complete meal.
negative_hypernyms = {
    'drink', 'beverage', 'liquid', 'snack', 'confectionery', 'dessert',
    'side dish (standalone)', 'appetizer (standalone)', 'condiment', 'spice',
    'sweetener', 'garnish', 'topping', 'sauce', 'dip', 'spread',
    'single ingredient', 'fruit (standalone)', 'vegetable (standalone, raw)',
    'alcoholic beverage', 'non-alcoholic beverage', 'juice', 'soup (light)',
    'salad (light)', 'bar snack', 'finger food', 'pastry (small)',
}

negative_keywords = {
    # Specific items usually not considered a full meal
    'water', 'soda', 'juice', 'coffee', 'tea', 'milk', 'smoothie', 'beer',
    'wine', 'cocktail', 'shot', 'espresso', 'latte', 'cappuccino',
    'candy', 'chocolate bar', 'gum', 'chips', 'crisps', 'cracker',
    'cookie', 'biscuit', 'muffin', 'doughnut', 'cake slice', 'ice cream scoop',
    'yogurt cup', 'fruit (single serving)', 'nuts (small pack)', 'seeds (small pack)',
    'fries', 'onion rings', 'coleslaw', 'side salad', 'breadstick', 'garlic bread (side)',
    'ketchup', 'mustard', 'mayonnaise', 'salt', 'pepper', 'sugar', 'honey',
    'oregano', 'basil', 'chili flake', 'crouton', 'pickle', 'olive (single)',
    'bread roll', 'toast slice', 'jam', 'butter pat', 'gravy (standalone)',
    'broth', 'clear soup', 'gelatin', 'pudding cup', 'fruit salad (small)',
    'popcorn', 'pretzels', 'granola bar', 'protein bar (snack size)',
}


# --- Positive Keywords and Hypernyms for 'Meal' ---
# These are terms strongly associated with a complete or substantial meal.
positive_hypernyms = {
    'meal', 'dinner', 'lunch', 'breakfast', 'brunch', 'supper',
    'main course', 'entree', 'full meal', 'heavy meal', 'multi-course meal',
    'balanced meal', 'complete meal', 'family meal', 'feast', 'banquet',
    'home-cooked meal', 'restaurant meal', 'buffet meal', 'packed meal',
    'hot meal', 'prepared meal', 'meal kit', 'casserole dish', 'stew dish',
    'roast', 'grill (full meal)', 'platter', 'bowl meal', 'combo meal',
    'set meal', 'table d\'hôte', 'prix fixe', 'buffet',
}

positive_keywords = {
    # Specific items, types of dishes, or preparations considered a full meal
    'sandwich (substantial)', 'burger', 'pizza', 'pasta (dish)', 'rice bowl',
    'steak', 'chicken dinner', 'fish dinner', 'roast beef', 'lasagna',
    'curry (meal)', 'stew', 'chili', 'casserole', 'pie (savory)',
    'tacos (multiple)', 'burrito (meal)', 'stir-fry', 'noodles (meal)',
    'sushi set', 'bento box', 'omelette (meal)', 'quiche', 'hot dog (meal)',
    'meatloaf', 'pot roast', 'shepherd\'s pie', 'paella', 'risotto',
    'tandoori chicken (meal)', 'biryani', 'thali', 'pho', 'ramen (meal)',
    'chow mein (meal)', 'lo mein (meal)', 'fried rice (meal)',
    'dim sum (selection)', 'full breakfast', 'brunch plate', 'dinner plate',
    'meal prep', 'cooked food (meal)', 'main dish', 'complete plate',
    'meal-sized', 'filling meal', 'satisfying meal', 'portion (meal)',
    'family style', 'serving (meal)', 'hearty meal', 'nourishing meal',
    'prepared lunch', 'dinner for two', 'family dinner', 'takeout meal',
}

# --- Create the Tag instance for 'Meal' ---
food_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=True
)