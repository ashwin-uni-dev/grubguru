from tagger import Tagger
from nlp_processor import NLPProcessor
from vegan import vegan_tag
from vegetarian import veg_tag
from drink import drink_tag

nlp = NLPProcessor()
t = Tagger(nlp)

t.add_tag('vegan', vegan_tag)
t.add_tag('veg', veg_tag)
t.add_tag('drink', drink_tag)


print (t.tag_description('almond milk sandwich'))