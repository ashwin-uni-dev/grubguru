from tag import Tag

negative_hypernyms = {
    # Categories of solid food
    'food', 'meal', 'dish', 'solid food', 'fruit', 'vegetable', 'meat', 'bread', 'pastry',
    'dessert', 'snack', 'cereal', 'main course', 'appetizer', 'side dish', 'confectionery',
}
        
negative_keywords = {
    # Common solid foods and food types
    'sandwich', 'burger', 'pizza', 'pasta', 'rice', 'bread', 'cake', 'cookie',
    'pie', 'steak', 'chicken', 'salad', 'soup', 'stew', 'casserole', 'dumpling',
    'noodle', 'sushi', 'taco', 'burrito', 'curry', 'quiche', 'omelette',
    'apple', 'banana', 'orange', 'potato', 'carrot', 'broccoli', 'cheese', 'yogurt',
    'chocolate bar', 'candy', 'chips', 'nuts', 'cracker', 'bamban', 'pancake',
    'waffle', 'toast', 'cereal', 'oatmeal', 'porridge', 'gravy', 'sauce', 'jam', 'butter',

    # Preparations that imply solid food
    'fried', 'baked', 'roasted', 'grilled', 'steamed', 'boiled', 'sliced', 'diced',
    'chopped', 'mashed', 'pureed', # Note: 'pureed' might be for thick drinks like smoothies, refine if needed

    # Components generally not part of typical drinks
    'crumble', 'crumb', 'slice', 'loaf', 'wedge', 'patty', 'fillet', 'chop', 'loaf',
}

positive_hypernyms = {
    # Categories of drinks
    'beverage', 'liquid', 'fluid', 'aqueous solution', 'alcoholic beverage',
    'nonalcoholic beverage', 'soft drink', 'hot drink', 'cold drink', 'cocktail',
    'juice', 'water', 'tea', 'coffee', 'milk' # 'milk' can be a drink or food ingredient, refine as needed
}
        
positive_keywords = {
    # Specific drink names
    'water', 'juice', 'smoothie', 'soda', 'coke', 'pepsi', 'sprite', 'lemonade',
    'tea', 'coffee', 'latte', 'cappuccino', 'espresso', 'mocha', 'cola',
    'milk', 'almond milk', 'oat milk', 'soy milk', 'coconut milk',
    'beer', 'wine', 'cocktail', 'spirit', 'whiskey', 'vodka', 'gin', 'rum',
    'champagne', 'cider', 'ale', 'lager', 'stout', 'seltzer', 'kombucha',
    'iced tea', 'iced coffee', 'frappe', 'shake', 'squash', 'cordial',
    'hot chocolate', 'cider', 'eggnog', 'sake', 'frappucino'

    # Terms indicating liquid form
    'liquid', 'beverage', 'drink', 'quenching', 'hydrating', 'sip', 'pour', 'chilled', 'iced', 'hot'
}

drink_tag = Tag(negative_keywords=negative_keywords | negative_hypernyms,
                positive_keywords=positive_keywords | positive_hypernyms,
                default=False)