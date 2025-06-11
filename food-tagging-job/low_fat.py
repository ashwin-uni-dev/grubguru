from tag import Tag

# --- Negative Keywords and Hypernyms for Low Fat Foods ---
# These are terms generally associated with high fat content.
negative_hypernyms = {
    # Food categories typically high in fat
    'fried food', 'deep-fried food', 'fatty meat', 'full-fat dairy',
    'processed meat', 'rich dessert', 'oils', 'butter', 'margarine',
    'creamy sauce', 'cheese (high fat)', 'pastry (high fat)', 'fast food',
    'junk food', 'nuts (as primary fat source)', 'seeds (as primary fat source)',
    'avocado (as primary fat source)', 'nut butter (high fat)', 'coconut product (high fat)',
    'lard', 'shortening', 'animal fat', 'vegetable oil (as main ingredient)',
    'confectionery (fat heavy)', 'baked goods (rich)', 'fatty cuts',
    'creamy soup', 'mayonnaise-based salad', 'sausage (high fat)',
}

negative_keywords = {
    # Specific foods and terms known for high fat content
    'butter', 'lard', 'margarine', 'shortening', 'tallow', 'bacon', 'sausage',
    'ribeye steak', 'pork belly', 'chicken skin', 'duck fat', 'greasy',
    'fried chicken', 'french fries', 'onion rings', 'doughnut', 'croissant',
    'pie crust', 'puff pastry', 'cheese (full fat)', 'cream cheese', 'sour cream',
    'whipped cream', 'full-fat milk', 'whole milk', 'heavy cream', 'double cream',
    'mayonnaise', 'aioli', 'ranch dressing', 'blue cheese dressing',
    'chocolate bar (high fat)', 'chips', 'crisps', 'cookies (butter rich)',
    'pastries', 'burgers (fatty)', 'hot dogs', 'salami', 'pepperoni',
    'chorizo', 'pâté', 'foie gras', 'caviar', 'salmon (fatty cut)', 'tuna (in oil)',
    'avocado', 'nuts (generic)', 'seeds (generic)', 'nut butter (generic)',
    'coconut oil', 'palm oil', 'olive oil (large quantity)', 'ghee',
    'deep-fried', 'pan-fried (oily)', 'crispy fried', 'creamy', 'buttery',
    'oily', 'fatty', 'rich', 'full-fat', 'excess fat', 'saturated fat',
    'trans fat', 'cholesterol (dietary)', 'grease', 'lardy', 'marbled',
}


# --- Positive Keywords and Hypernyms for Low Fat Foods ---
# These are terms strongly associated with low fat content.
positive_hypernyms = {
    # Food categories typically low in fat
    'lean protein', 'fat-free dairy', 'skim dairy', 'fruits', 'vegetables',
    'whole grains', 'low-fat alternative', 'diet food', 'light food',
    'steamed food', 'boiled food', 'grilled food', 'baked food (without added fat)',
    'broth-based soup', 'lean meat', 'lean poultry', 'lean fish',
    'water-based food', 'oil-free dressing', 'vegetable (non-starchy)',
    'low-calorie food', 'weight loss food', 'heart healthy food (low fat context)',
    'fat-reduced', 'reduced fat', 'no added fat', 'fat-conscious',
}

positive_keywords = {
    # Specific foods and terms known for low fat content
    'fat-free milk', 'skim milk', 'fat-free yogurt', 'non-fat yogurt',
    'low-fat cottage cheese', 'fat-free cream cheese', 'low-fat cheese',
    'chicken breast (skinless)', 'turkey breast (skinless)', 'cod', 'haddock',
    'tilapia', 'tuna (in water)', 'salmon (lean cut)', 'white fish',
    'egg whites', 'beans (cooked)', 'lentils', 'chickpeas', 'tofu (plain)',
    'tempeh (plain)', 'seitan (plain)', 'fruits (all types)', 'apples', 'bananas',
    'oranges', 'berries', 'watermelon', 'melon', 'peaches', 'pears',
    'vegetables (all types)', 'broccoli', 'spinach', 'carrots', 'green beans',
    'lettuce', 'cucumber', 'tomatoes', 'zucchini', 'cabbage', 'mushrooms',
    'brown rice', 'quinoa', 'oats', 'whole wheat bread', 'air-popped popcorn',
    'water', 'sparkling water', 'black coffee', 'plain tea', 'broth',
    'vinegar', 'herbs', 'spices', 'lemon juice', 'lime juice', 'mustard (plain)',
    'steamed', 'boiled', 'grilled', 'baked (dry heat)', 'roasted (without oil)',
    'broiled', 'poached', 'fat-free', 'low-fat', 'reduced fat', 'lean',
    'skinless', 'trim', 'drain (fat)', 'blot (fat)', 'skimmed',
    'light (food product)', 'diet (food product)', 'healthy (food product)',
    'fat-conscious', 'cholesterol-free', 'sugar-free (if also low fat)',
    'oil-free', 'dressing (oil-free)',
}

# --- Create the Tag instance for Low Fat Foods ---
low_fat_food_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)