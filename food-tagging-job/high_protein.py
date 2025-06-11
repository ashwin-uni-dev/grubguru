from tag import Tag

# --- Negative Keywords and Hypernyms for High Protein Foods ---
# These are terms generally not associated with high protein content,
# typically emphasizing carbohydrates, fats, or sugars.
negative_hypernyms = {
    # Food categories generally low in protein or high in other macros
    'simple carbohydrates', 'sugary drinks', 'dessert', 'confectionery',
    'processed snacks', 'baked goods', 'fried carbohydrates', 'high-sugar food',
    'starchy vegetables', 'root vegetables', 'refined grains', 'fruit (primarily carb)',
    'junk food', 'empty calories', 'sugary cereals', 'sweetened beverages',
    'oil (cooking)', 'butter (primary use)', 'margarine', 'shortening',
    'condiment (sugar/fat heavy)', 'sauce (sugar/fat heavy)', 'candy bar',
    'pastry (high sugar)', 'syrup', 'jam', 'jelly',
}

negative_keywords = {
    # Specific foods known for low protein or high other macros
    'sugar', 'white bread', 'white rice', 'potato chips', 'soda', 'cola',
    'candy', 'gummy bears', 'chocolate bar (milk/white)', 'marshmallow',
    'fruit juice (added sugar)', 'sweetened tea', 'energy drink (sugary)',
    'french fries', 'doughnut', 'cake', 'cookie', 'pie', 'croissant',
    'muffin', 'waffle', 'pancake', 'syrup', 'jam', 'jelly', 'butter',
    'margarine', 'vegetable oil', 'corn oil', 'sunflower oil',
    'ketchup', 'mayonnaise', 'barbecue sauce (sugary)', 'sweet chili sauce',
    'apple', 'banana', 'orange', 'grape', 'watermelon', 'melon', 'pear', # Most fruits
    'potato', 'sweet potato', 'corn', 'tapioca', 'cassava', # Starchy veggies
    'white pasta', 'rice cakes', 'crackers (plain)', 'pretzels', 'popcorn (plain)',
    'muesli (high sugar)', 'granola bar (high sugar)', 'potato salad',
    'gelatin dessert', 'sorbet', 'ice cream (standard)', 'margarine',
}


# --- Positive Keywords and Hypernyms for High Protein Foods ---
# These are terms strongly associated with high protein content,
# including both animal and plant-based sources.
positive_hypernyms = {
    # General categories of high-protein food
    'lean protein', 'protein source', 'animal protein', 'plant-based protein',
    'complete protein', 'dairy protein', 'meat (lean)', 'poultry (lean)',
    'fish (lean)', 'seafood (lean)', 'legumes', 'nuts', 'seeds',
    'protein supplement', 'whey protein', 'casein protein', 'soy protein',
    'pea protein', 'egg product', 'greek yogurt (high protein)', 'cottage cheese (high protein)',
    'high protein snack', 'protein bar', 'protein powder', 'protein shake',
    'muscle building food', 'athletic diet food', 'lean meat', 'lean poultry',
    'lean fish', 'protein-rich food', 'protein-packed meal',
}

positive_keywords = {
    # Specific foods known for high protein content (animal and plant-based)
    # Animal Proteins
    'chicken breast', 'turkey breast', 'lean beef', 'sirloin', 'tuna',
    'salmon', 'cod', 'haddock', 'tilapia', 'shrimp', 'prawns', 'eggs',
    'egg whites', 'greek yogurt', 'greek yoghurt', 'cottage cheese', 'skyr', 'quark',
    'whey protein', 'casein protein', 'milk protein isolate', 'bone broth',
    'pork loin', 'lean ground beef', 'sardines', 'mackerel', 'scallops',
    'lobster', 'crab', 'game meat', 'bison', 'elk', 'venison',

    # Plant-Based Proteins
    'lentils', 'black beans', 'kidney beans', 'chickpeas', 'edamame',
    'tofu', 'tempeh', 'seitan', 'soybeans', 'mung beans', 'navy beans',
    'lima beans', 'pinto beans', 'cannellini beans', 'fava beans',
    'quinoa', 'oats (steel-cut/rolled)', 'buckwheat', 'amaranth', 'teff',
    'nutritional yeast', 'spirulina', 'chlorella', 'hemp seeds', 'chia seeds',
    'flax seeds', 'pumpkin seeds', 'sunflower seeds', 'almonds', 'peanuts',
    'cashews', 'pistachios', 'walnuts', 'peanut butter (natural)', 'almond butter',
    'soy protein', 'pea protein', 'rice protein', 'hemp protein', 'protein isolate',
    'plant-based burger (high protein)', 'vegan sausage (high protein)',
    'lentil pasta', 'chickpea pasta', 'edamame pasta',

    # General terms related to protein
    'protein', 'muscle', 'gainz', 'workout food', 'recovery food',
    'amino acids', 'protein-rich', 'high-protein', 'low-carb (often implies high protein)',
    'keto (often implies high protein)', 'bodybuilding diet', 'fitness food',
    'lean', 'bulk (muscle)', 'cut (muscle)', 'macros (protein context)',
}

# --- Create the Tag instance for High Protein Foods ---
high_protein_food_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)