from nltk.corpus import wordnet as wn

def get_all_hypernyms_recursive(word, max_depth=4):
    """
    Get all hypernyms recursively for a word using WordNet
    Limited depth to avoid going too abstract
    """
    hypernyms = set()
    
    # Get all synsets for the word
    synsets = wn.synsets(word)
    
    def _get_hypernyms_recursive(synset, depth=0):
        if depth >= max_depth:
            return
            
        for hypernym in synset.hypernyms():
            # Get the lemma names (actual words) from the synset
            for lemma in hypernym.lemmas():
                hypernyms.add(lemma.name().lower().replace('_', ' '))
            
            # Recursively get hypernyms
            _get_hypernyms_recursive(hypernym, depth + 1)
    
    # Process all synsets
    for synset in synsets:
        _get_hypernyms_recursive(synset)
    
    return list(hypernyms)