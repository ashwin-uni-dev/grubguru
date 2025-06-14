from tag import Tag

# --- Negative Keywords and Hypernyms for 'Spicy' ---
# These are terms generally NOT associated with spicy foods, implying mild, sweet, or savory (non-spicy).
negative_hypernyms = {
    'mild food', 'sweet food', 'plain food', 'dessert', 'confectionery',
    'baked goods (sweet)', 'candy', 'pastry (sweet)', 'chocolate product',
    'sugary drink', 'fruit (sweet)', 'sweetener', 'syrup (sweet)', 'jam',
    'jelly', 'dairy dessert', 'frozen dessert', 'baked good (sweet)',
    'sweetened beverage', 'cake', 'cookie', 'pie', 'pudding', 'custard',
    'ice cream', 'sorbet', 'mousse', 'caramel', 'fudge', 'marshmallow',
    'jelly bean', 'gummy candy', 'fruit dessert', 'fruit preserves',
    'sweet bread', 'sweet pastry', 'non-spicy food', 'bland food',
}

negative_keywords = {
    # Specific items generally not considered spicy, or primarily sweet/mild/bland
    'sugar', 'honey', 'maple syrup', 'agave nectar', 'molasses',
    'chocolate', 'vanilla', 'strawberry', 'blueberry', 'raspberry',
    'cherry', 'peach', 'mango', 'pineapple', 'grape', 'apple (sweet)', 'banana',
    'dessert', 'cake', 'cupcake', 'cookie', 'brownie', 'pie', 'tart',
    'muffin (sweet)', 'doughnut', 'croissant (sweet)', 'cinnamon roll',
    'sweet roll', 'scone (sweet)', 'ice cream', 'gelato', 'sorbet',
    'frozen yogurt', 'pudding', 'custard', 'jello', 'mousse', 'tiramisu',
    'cheesecake', 'creme brulee', 'flan', 'candy', 'gummy', 'lollipop',
    'chocolate bar', 'bonbon', 'fudge', 'nougat', 'marshmallow', 'jelly beans',
    'caramel candy', 'toffees', 'gummy candy', 'fruit juice (sweet)',
    'soda (sweet)', 'lemonade (sweet)', 'sweet tea', 'hot chocolate',
    'milkshake', 'smoothie (sweet)', 'syrup (e.g., pancake syrup)', 'jam',
    'jelly', 'marmalade', 'fruit preserves', 'sweet sauce', 'glaze (sweet)',
    'honey glaze', 'sugar glaze', 'sweetened', 'sugary', 'dessert-like',
    'fruity (sweet context)', 'candied', 'glazed (sweet)', 'frosted',
    'chocolatey', 'vanilla-flavored', 'caramel-flavored', 'syrupy',
    'confectionery', 'treat', 'water', 'milk', 'plain rice', 'plain pasta',
    'white bread', 'crackers (plain)', 'butter (plain)', 'salt (plain)',
    'cucumber', 'celery', 'lettuce', 'plain yogurt', 'cream', 'cheese (mild)',
    'olive oil', 'vegetable oil', 'chicken breast (plain)', 'fish fillet (plain)',
    'boiled potatoes', 'steamed broccoli', 'mild curry',
}

# --- Positive Keywords and Hypernyms for 'Spicy' ---
# These are terms strongly associated with spicy tastes.
positive_hypernyms = {
    'spicy food', 'hot food', 'chili dish', 'curry dish', 'pepper dish',
    'condiment (spicy)', 'spice (spicy)', 'sauce (spicy)', 'pepper variety',
    'spicy snack', 'spicy beverage', 'hot pepper', 'chili pepper', 'spicy herb',
    'fiery food', 'pungent food', 'spicy main course', 'spicy soup',
    'spicy noodle dish', 'spicy stew', 'spicy dip', 'spicy seasoning',
}

positive_keywords = {
    # Specific items or terms indicating spiciness
    'chili', 'jalapeño', 'habanero', 'scotch bonnet', 'cayenne', 'sriracha',
    'tabasco', 'ghost pepper', 'carolina reaper', 'bird\'s eye chili',
    'chipotle', 'ancho', 'serrano', 'poblano', 'bell pepper (spicy variety)',
    'hot sauce', 'chili powder', 'red pepper flakes', 'wasabi', 'horseradish',
    'ginger (spicy use)', 'black pepper (strong)', 'white pepper (strong)',
    'mustard (spicy)', 'kimchi', 'gochujang', 'sambal', 'harissa', 'peri', 'piri'
    'spicy', 'hot', 'fiery', 'burning', 'piquant', 'pungent', 'zesty (spicy context)',
    'peppery', 'chili-flavored', 'spiced', 'extra hot', 'medium hot', 'mildly spicy',
    'tingly', 'numbing', 'sichuan', 'korean spicy', 'thai spicy', 'indian spicy',
    'mexican spicy', 'cajun', 'creole', 'jerk', 'buffalo', 'dynamite',
    'volcano', 'hellfire', 'blazing', 'scorch', 'flame',
    'spicy chicken', 'spicy beef', 'spicy pork', 'spicy shrimp', 'spicy noodles',
    'spicy soup', 'spicy salad', 'spicy wings', 'spicy tacos', 'spicy curry',
    'chili oil', 'spicy mayonnaise', 'spicy ketchup', 'spicy salsa', 'spicy relish',
    'ginger ale (spicy)', 'bloody mary (spicy)', 'spicy margarita',
}

# --- Create the Tag instance for 'Spicy' ---
spicy_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)