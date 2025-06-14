from tag import Tag

# --- Negative Keywords and Hypernyms for 'Vegetarian' ---
# These are terms generally NOT associated with vegetarian foods.
negative_hypernyms = {
    # Animal-based categories
    'meat', 'flesh', 'animal tissue', 'muscle', 'red meat', 'white meat',
    'poultry', 'fowl', 'game', 'seafood', 'fish', 'shellfish',
    'animal product (non-dairy/egg)', 'animal fat', 'broth (meat-based)',
    'stock (meat-based)', 'gelatin product', 'rennet product', 'bone product',
}
        
negative_keywords = {
    # Meat and poultry
    'beef', 'pork', 'chicken', 'turkey', 'lamb', 'mutton', 'veal',
    'duck', 'goose', 'bacon', 'ham', 'sausage', 'pepperoni', 'salami',
    'chorizo', 'prosciutto', 'venison', 'rabbit', 'quail', 'wings',
    'steak', 'chop', 'ribs', 'mince (meat)', 'ground beef', 'patty (meat)',
    'drumstick', 'thigh', 'breast (chicken/turkey)', 'jerky', 'deli meat',
            
    # Seafood
    'fish', 'salmon', 'tuna', 'cod', 'bass', 'trout', 'mackerel',
    'shrimp', 'crab', 'lobster', 'oyster', 'clam', 'mussel', 'scallop',
    'squid', 'octopus', 'anchovies', 'sardines', 'caviar', 'roe',
    'prawn', 'calamari', 'seafood mix', 'fish sauce', 'oyster sauce',

    # Animal-derived additives and ingredients
    'gelatin', 'gelatine', 'collagen', 'keratin', 'lanolin',
    'carmine', 'cochineal', 'shellac', 'isinglass', 'rennet',
    'lard', 'tallow', 'suet', 'bone meal', 'fish oil',
    'vitamin d3 (animal-derived)', 'cholesterol (animal-derived)',
    'elastin', 'whey protein (if not clearly milk-derived, but often associated with meat processing)',
    'animal fats', 'animal stock', 'meat extract', 'bouillon (meat)', 'gravy (meat)',
}

# --- Positive Keywords and Hypernyms for 'Vegetarian' ---
# These are terms strongly associated with vegetarian foods.
positive_hypernyms = {
    'vegetable', 'fruit', 'grain', 'legume', 'nut', 'seed',
    'plant-based', 'vegetarian food', 'dairy product', 'egg product',
    'plant protein', 'vegetable dish', 'fruit dish', 'grain dish',
    'legume dish', 'nut product', 'seed product', 'meat substitute',
    'vegan food', 'soy product', 'tofu product', 'tempeh product',
    'seitan product', 'mushroom variety', 'algae', 'fungi',
    'vegetarian meal', 'dairy alternative', 'egg alternative',
    'plant-derived', 'produce', 'vegetarian source', 'plant-based milk',
}

positive_keywords = {
    # General Vegetarian/Plant-based terms
    'vegetarian', 'veg', 'plant-based', 'meat-free', 'animal-free',
    'dairy', 'milk', 'cheese', 'yogurt', 'butter (dairy)', 'eggs',
    'egg-based', 'lactose', 'casein', 'whey (dairy)',

    # Vegetables
    'broccoli', 'spinach', 'carrot', 'potato', 'tomato', 'onion', 'garlic',
    'pepper (bell)', 'cucumber', 'lettuce', 'cabbage', 'kale', 'cauliflower',
    'zucchini', 'eggplant', 'sweet potato', 'corn', 'peas', 'beans (green/kidney/black)',
    'lentil', 'chickpea', 'asparagus', 'artichoke', 'beets', 'brussels sprouts',
    'celery', 'mushroom', 'squash', 'avocado', 'olives', 'ginger', 'turmeric',

    # Fruits
    'apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry', 'raspberry',
    'cherry', 'peach', 'mango', 'pineapple', 'kiwi', 'lemon', 'lime', 'melon',
    'pear', 'plum', 'coconut', 'date', 'fig',

    # Grains
    'rice', 'pasta', 'bread', 'quinoa', 'oats', 'barley', 'wheat', 'rye',
    'corn', 'millet', 'buckwheat', 'couscous', 'farro', 'amaranth',
    'tortilla', 'cracker', 'cereal', 'flour',

    # Legumes (beyond specific beans)
    'lentils', 'chickpeas', 'edamame', 'peas', 'hummus', 'falafel',

    # Nuts and Seeds
    'almond', 'walnut', 'cashew', 'peanut', 'pistachio', 'pecan',
    'sunflower seed', 'pumpkin seed', 'chia seed', 'flax seed', 'sesame seed',
    'tahini', 'nut butter', 'seed butter',

    # Meat Substitutes and Soy Products
    'tofu', 'tempeh', 'seitan', 'soy', 'soybean', 'edamame', 'texturized vegetable protein',
    'TVP', 'vegan sausage', 'vegan burger', 'plant-based mince', 'meatless',
    'vegetarian sausage', 'vegetarian burger', 'impossible burger', 'beyond meat',
    'mushroom burger', 'bean burger', 'vegetable patty',

    # Dairy Alternatives
    'almond milk', 'soy milk', 'oat milk', 'rice milk', 'coconut milk', 'cashew milk',
    'vegan cheese', 'plant-based yogurt', 'vegan butter', 'dairy-free', 'lactose-free',

    # Other common vegetarian ingredients/terms
    'herb', 'spice', 'oil (vegetable/nut/seed)', 'vinegar', 'yeast', 'nutritional yeast',
    'agar-agar', 'pectin', 'xanthan gum', 'guar gum', 'plant-based omega-3',
    'maple syrup', 'agave nectar', 'sugar', 'honey', 'molasses',
    'vegetable broth', 'vegetable stock', 'vegetable oil', 'olive oil',
    'sunflower oil', 'canola oil', 'coconut oil', 'sesame oil',
    'fruit juice', 'vegetable juice', 'plant extract', 'floral extract',
    'seaweed', 'nori', 'kelp', 'spirulina', 'chlorella',
    'pure vegetable', 'contains no meat', 'suitable for vegetarians',
    'green (food context)', 'garden (food context)', 'harvest (food context)',
}

veg_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)