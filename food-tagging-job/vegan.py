from tag import Tag

negative_hypernyms = {
    # Animal-based categories
    'meat', 'flesh', 'animal tissue', 'muscle', 'red meat', 'white meat',
    'poultry', 'fowl', 'game', 'seafood', 'fish', 'shellfish',
    'dairy product', 'milk product', 'cheese', 'fermented milk',
            
    # Broader animal categories
    'animal', 'vertebrate', 'mammal', 'bird', 'aquatic vertebrate',
    'crustacean', 'mollusk', 'arthropod',
            
    # Animal-derived substances
    'animal product', 'animal material', 'animal substance'
}
        
negative_keywords = {
    # Meat and poultry
    'beef', 'pork', 'chicken', 'turkey', 'lamb', 'mutton', 'veal',
    'duck', 'goose', 'bacon', 'ham', 'sausage', 'pepperoni', 'salami',
    'chorizo', 'prosciutto', 'venison', 'rabbit', 'quail',
            
    # Seafood
    'fish', 'salmon', 'tuna', 'cod', 'bass', 'trout', 'mackerel',
    'shrimp', 'crab', 'lobster', 'oyster', 'clam', 'mussel', 'scallop',
    'squid', 'octopus', 'anchovies', 'sardines', 'caviar', 'roe',
            
    # Dairy
    'milk', 'cream', 'butter', 'cheese', 'yogurt', 'yoghurt',
    'whey', 'casein', 'lactose', 'ghee', 'buttermilk', 'kefir',
    'mozzarella', 'cheddar', 'parmesan', 'feta', 'brie', 'camembert',
    'cottage cheese', 'cream cheese', 'sour cream', 'ice cream',
            
    # Eggs
    'egg', 'eggs', 'yolk', 'albumen', 'albumin', 'mayo', 'mayonnaise',
    'meringue', 'custard', 'eggnog',
            
    # Honey and bee products
    'honey', 'beeswax', 'royal jelly', 'propolis', 'bee pollen',
            
    # Animal-derived additives and ingredients
    'gelatin', 'gelatine', 'collagen', 'keratin', 'lanolin',
    'carmine', 'cochineal', 'shellac', 'isinglass', 'rennet',
    'lard', 'tallow', 'suet', 'bone meal', 'fish oil',
    'vitamin d3', 'cholesterol', 'lecithin', 'elastin'
}

vegan_alternatives = {
    'almond milk', 'soy milk', 'oat milk', 'coconut milk', 'rice milk',
    'cashew milk', 'plant milk', 'vegan cheese', 'nutritional yeast',
    'plant butter', 'vegan butter', 'coconut oil', 'olive oil',
    'flax egg', 'chia egg', 'aquafaba', 'maple syrup', 'agave',
    'coconut cream', 'cashew cream', 'tofu', 'tempeh', 'seitan',
    'plant protein', 'beyond meat', 'impossible', 'vegan mayo'
}

vegan_tag = Tag(negative_keywords=negative_keywords | negative_hypernyms, positive_keywords=vegan_alternatives)