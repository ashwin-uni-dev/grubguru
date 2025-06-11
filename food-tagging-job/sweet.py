from tag import Tag

# --- Negative Keywords and Hypernyms for 'Sweet' ---
# These are terms generally NOT associated with sweet foods, implying savory, spicy, or sour.
negative_hypernyms = {
    'savory food', 'spicy food', 'sour food', 'bitter food', 'main course',
    'meat dish', 'vegetable dish (savory)', 'soup (savory)', 'salad (savory)',
    'condiment (savory)', 'spice (savory)', 'herb (savory)', 'staple grain',
    'bread (savory)', 'cheese (savory)', 'fermented food', 'pickled food',
    'fat (savory)', 'oil (cooking)', 'dairy product (savory)', 'egg dish (savory)',
    'fish (savory)', 'poultry (savory)', 'legume (savory)',
}

negative_keywords = {
    # Specific items generally not considered sweet, or primarily savory/spicy/sour
    'salt', 'pepper', 'garlic', 'onion', 'chili pepper', 'jalapeño',
    'vinegar', 'lemon juice (savory use)', 'lime juice (savory use)', 'mustard',
    'ketchup (savory use)', 'mayonnaise', 'soy sauce', 'fish sauce', 'oyster sauce',
    'hot sauce', 'salsa', 'guacamole', 'hummus', 'olives (savory)', 'pickles (dill)',
    'bacon', 'sausage', 'steak', 'chicken breast (plain)', 'fish fillet (plain)',
    'eggs (scrambled/fried)', 'rice (plain)', 'pasta (plain)', 'bread (plain/savory)',
    'crackers (plain/savory)', 'cheese (cheddar/mozzarella/parmesan)',
    'broccoli', 'spinach', 'carrots (savory context)', 'potatoes', 'corn (savory)',
    'lentils (savory)', 'beans (savory)', 'tofu (plain)', 'tempeh (plain)',
    'pizza (savory toppings)', 'burger (savory)', 'taco (savory)', 'curry (savory)',
    'soup (chicken/vegetable)', 'stew', 'salad (garden/caesar)', 'chips (plain/savory)',
    'nuts (unsalted)', 'seeds (unsalted)', 'broth', 'ghee', 'butter (savory use)',
}


# --- Positive Keywords and Hypernyms for 'Sweet' ---
# These are terms strongly associated with sweet tastes.
positive_hypernyms = {
    'sweet food', 'dessert', 'confectionery', 'baked goods (sweet)',
    'candy', 'pastry (sweet)', 'chocolate product', 'sugary drink',
    'fruit (sweet)', 'sweetener', 'syrup', 'jam', 'jelly', 'glaze (sweet)',
    'sweet snack', 'sweet treat', 'sugary item', 'honey product',
    'dairy dessert', 'frozen dessert', 'baked good (sweet)', 'sweetened beverage',
    'cake', 'cookie', 'pie', 'pudding', 'custard', 'ice cream', 'sorbet',
    'mousse', 'caramel', 'fudge', 'marshmallow', 'jelly bean', 'gummy candy',
    'fruit dessert', 'fruit preserves', 'sweet bread', 'sweet pastry',
}

positive_keywords = {
    # Specific items or terms indicating sweetness
    'sugar', 'honey', 'maple syrup', 'agave nectar', 'molasses', 'stevia',
    'xylitol', 'erythritol', 'aspartame', 'sucralose', 'saccharin',
    'chocolate', 'vanilla', 'caramel', 'strawberry', 'blueberry', 'raspberry',
    'cherry', 'peach', 'mango', 'pineapple', 'grape', 'apple (sweet)', 'banana',
    'dessert', 'cake', 'cupcake', 'cookie', 'brownie', 'pie', 'tart', 'muffin (sweet)',
    'doughnut', 'croissant (sweet)', 'cinnamon roll', 'sweet roll', 'scone (sweet)',
    'ice cream', 'gelato', 'sorbet', 'frozen yogurt', 'pudding', 'custard',
    'jello', 'mousse', 'tiramisu', 'cheesecake', 'creme brulee', 'flan',
    'candy', 'gummy', 'lollipop', 'chocolate bar', 'bonbon', 'fudge', 'nougat',
    'marshmallow', 'jelly beans', 'caramel candy', 'toffees', 'gummy candy',
    'fruit juice (sweet)', 'soda (sweet)', 'lemonade (sweet)', 'sweet tea',
    'hot chocolate', 'milkshake', 'smoothie (sweet)', 'syrup (e.g., pancake syrup)',
    'jam', 'jelly', 'marmalade', 'fruit preserves', 'sweet sauce', 'glaze',
    'honey glaze', 'sugar glaze', 'sweetened', 'sugary', 'dessert-like',
    'fruity (sweet context)', 'candied', 'glazed', 'frosted', 'chocolatey',
    'vanilla-flavored', 'caramel-flavored', 'syrupy', 'confectionery', 'treat',
}

# --- Create the Tag instance for 'Sweet' ---
sweet_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)