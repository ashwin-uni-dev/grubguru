from tag import Tag

# --- Negative Keywords and Hypernyms for Italian Cuisine ---
# These are terms generally not associated with Italian cuisine,
# or categories/dishes from other culinary traditions.
negative_hypernyms = {
    # General non-Italian food categories
    'indian cuisine', 'mexican food', 'chinese food', 'japanese food',
    'thai food', 'vietnamese food', 'korean food', 'middle eastern food',
    'african cuisine', 'south american cuisine', 'french cuisine',
    'american diner food', 'british pub grub', 'german cuisine',
    'scandinavian food', 'eastern european food', 'oceanic cuisine',
    'cajun food', 'creole food', 'brazilian food', 'peruvian food',
    'caribbean food', 'australian cuisine', 'new zealand cuisine',
    'canadian poutine', 'irish food', 'scottish food', 'welsh food',
    'balkan food', 'maghreb cuisine', 'central asian food',

    # Specific dishes/ingredients from other cuisines
    'biryani dish', 'taco', 'burrito', 'sushi roll', 'ramen noodle',
    'pho soup', 'pad thai noodle', 'borscht', 'gnocchi (non-Italian)',
    'dumpling (non-Italian)', 'wonton soup', 'spring roll', 'shawarma',
    'falafel', 'kebab (non-Italian style)', 'fish and chips',
    'shepherd\'s pie', 'bibimbap', 'tostada', 'empanada', 'schnitzel',
    'bouillabaisse', 'coq au vin', 'creme brulee', 'apple pie',
    'doughnut', 'cupcake', 'bagel', 'coleslaw', 'potato salad',
    'butter chicken', 'paneer dish', 'samosa', 'gulab jamun', 'dosa',
    'teriyaki chicken', 'tempura', 'udon', 'sashimi', 'tonkatsu',
    'poke bowl', 'banh mi', 'tom yum', 'green curry', 'red curry',
    'gyoza', 'yakitori', 'okonomiyaki', 'takoyaki', 'kimchi stew',
    'bulgogi', 'pork belly (non-Italian style)', 'chop suey',
    'kung pao chicken', 'general tso\'s chicken', 'fried rice',
    'chow mein', 'dim sum', 'hot pot', 'mapo tofu', 'peking duck',
}

negative_keywords = {
    # Specific non-Italian ingredients or preparation styles
    'soy sauce', 'oyster sauce', 'hoisin sauce', 'fish sauce (non-Italian)',
    'sesame oil', 'chili oil', 'five-spice powder', 'star anise',
    'sichuan peppercorns', 'curry powder', 'garam masala', 'tamarind',
    'chickpeas (non-Italian use)', 'lentils (non-Italian use)', 'ghee',
    'kimchi', 'wasabi', 'miso', 'sriracha', 'gochujang',
    'maple syrup', 'barbecue sauce (american)', 'ketchup', 'mustard',
    'relish', 'pickles (non-Italian)', 'cornbread', 'tortilla chip',
    'tuna (non-Italian use)', 'salmon (non-Italian use)', 'cod (non-Italian use)',
    'avocado', 'blueberry', 'raspberry', 'strawberry', 'artichoke (non-Italian use)',
    'brussels sprouts', 'asparagus', 'kale', 'quinoa', 'couscous',
    'ginger (non-Italian use)', 'garlic (non-Italian use)', 'scallions',
    'bok choy', 'napa cabbage', 'water chestnuts', 'bamboo shoots',
    'black beans (fermented)', 'chili bean paste', 'plum sauce',
    'wok', 'stir-fry', 'tandoor', 'dum cooking', 'charcuterie (non-Italian)',
    'sushi bar', 'ramen shop', 'deli', 'brasserie', 'bistro',
    'steakhouse', 'chophouse', 'brewery', 'bbq', 'gumbo', 'jambalaya',
    'grits', 'fondue', 'sushi grade', 'raw bar',
}


# --- Positive Keywords and Hypernyms for Italian Cuisine ---
# These are terms strongly associated with Italian cuisine,
# including dishes, ingredients, spices, and cooking methods.
positive_hypernyms = {
    # General categories of Italian food
    'italian cuisine', 'pasta dish', 'pizza type', 'risotto dish',
    'gnocchi dish', 'lasagna type', 'ravioli type', 'tortellini type',
    'italian bread', 'italian cheese', 'italian dessert', 'italian wine',
    'italian coffee', 'roman cuisine', 'neapolitan cuisine', 'sicilian cuisine',
    'tuscan cuisine', 'emilian cuisine', 'ligurian cuisine', 'venetian cuisine',
    'puglian cuisine', 'sardinian cuisine', 'calabrian cuisine',
    'italian antipasto', 'italian main course', 'italian side dish',
    'gelato flavor', 'espresso drink', 'mediterranean diet', 'italian restaurant',
    'trattoria', 'osteria', 'pizzeria', 'ristorante', 'enoteca',
}

positive_keywords = {
    # Specific Italian dishes
    'pizza margherita', 'pizza pepperoni', 'lasagna', 'spaghetti carbonara',
    'fettuccine alfredo', 'pasta primavera', 'penne arrabbiata',
    'linguine with clams', 'ravioli', 'tortellini', 'gnocchi', 'risotto milanese',
    'risotto funghi', 'minestrone', 'focaccia', 'bruschetta', 'caprese salad',
    'parmigiana di melanzane', 'osso buco', 'saltimbocca', 'cotoletta',
    'tiramisu', 'panna cotta', 'cannoli', 'arancini', 'polenta', 'ribollita',
    'ciao', 'ciao (food related)', 'gelato', 'calzone', 'focaccia',
    'fritto misto', 'panzanella', 'acquacotta', 'ribollita', 'pappa al pomodoro',
    'bistecca alla fiorentina', 'salsiccia', 'ragu', 'cacio e pepe', 'amatriciana',
    'aglio e olio', 'napolitana', 'marinara', 'pesto', 'bolognese', 'genovese',

    # Italian ingredients and spices
    'pasta', 'pizza dough', 'tomato sauce', 'parmesan cheese', 'mozzarella',
    'ricotta', 'pecorino romano', 'gorgonzola', 'prosciutto', 'salami',
    'pancetta', 'guanciale', 'olive oil', 'balsamic vinegar', 'oregano',
    'basil', 'rosemary', 'thyme', 'garlic (italian cooking)',
    'red pepper flakes', 'olives (italian varieties)', 'capers', 'sun-dried tomatoes',
    'artichokes', 'eggplant', 'zucchini', 'bell peppers', 'onions',
    'fresh mozzarella', 'buffalo mozzarella', 'burrata', 'grana padano',
    'mascarpone', 'espresso', 'semolina', '00 flour', 'provolone',
    'fontina', 'asiago', 'ciabatta', 'baguette (italian style)', 'polenta',

    # Italian cooking methods and terms
    'al dente', 'sautéed (italian)', 'braised (italian)', 'oven-baked (italian)',
    'grilled (italian)', 'pan-fried (italian)', 'marinara (sauce)', 'bolognese (sauce)',
    'genovese (style)', 'slow-cooked (italian)', 'wood-fired (pizza)',
    'trattoria', 'osteria', 'ristorante', 'pizzeria', 'eataly',
    'italian coffee culture', 'aperitivo', 'digestivo', 'dolce (dessert)',
    'primo (first course)', 'secondo (second course)', 'contorno (side dish)',
    'formaggio (cheese)', 'salumi (cured meats)',

    # Italian drinks
    'espresso', 'cappuccino', 'latte macchiato', 'americano', 'macchiato',
    'prosecco', 'chianti', 'barolo', 'pinot grigio', 'negroni', 'aperol spritz',
    'limoncello', 'grappa', 'amaretto', 'peroni', 'moretti', 'san pellegrino',
    'acqua panna', 'vino (wine)', 'birra (beer)', 'caffe (coffee)',
}

italian_cuisine_tag = Tag(
    negative_keywords=negative_keywords | negative_hypernyms,
    positive_keywords=positive_keywords | positive_hypernyms,
    default=False
)