from tag import Tag

negative_hypernyms = {
    # Animal-based categories
    'meat', 'flesh', 'animal tissue', 'muscle', 'red meat', 'white meat',
    'poultry', 'fowl', 'game', 'seafood', 'fish', 'shellfish',    
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

            
    # Animal-derived additives and ingredients
    'gelatin', 'gelatine', 'collagen', 'keratin', 'lanolin',
    'carmine', 'cochineal', 'shellac', 'isinglass', 'rennet',
    'lard', 'tallow', 'suet', 'bone meal', 'fish oil',
    'vitamin d3', 'cholesterol', 'lecithin', 'elastin'
}

veg_tag = Tag(negative_keywords=negative_keywords | negative_hypernyms)