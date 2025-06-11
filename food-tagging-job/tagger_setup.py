from tagger import Tagger
from nlp_processor import NLPProcessor
from vegan import vegan_tag
from vegetarian import veg_tag
from drink import drink_tag
from indian import indian_cuisine_tag
from chinese import chinese_cuisine_tag
from italian import italian_cuisine_tag
from fast_food import fast_food_tag
from high_protein import high_protein_food_tag
from low_fat import low_fat_food_tag
from sweet import sweet_tag

nlp = NLPProcessor()
food_tagger = Tagger(nlp)

food_tagger.add_tag('vegan', vegan_tag)
food_tagger.add_tag('veg', veg_tag)
food_tagger.add_tag('drink', drink_tag)
food_tagger.add_tag('indian', indian_cuisine_tag)
food_tagger.add_tag('chinese', chinese_cuisine_tag)
food_tagger.add_tag('italian', italian_cuisine_tag)
food_tagger.add_tag('fast food', fast_food_tag)
food_tagger.add_tag('high protein', high_protein_food_tag)
food_tagger.add_tag('low fat', low_fat_food_tag)
food_tagger.add_tag('sweet', sweet_tag)