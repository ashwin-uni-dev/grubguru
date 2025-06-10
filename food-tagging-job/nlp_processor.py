from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet as wn
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import string

class NLPProcessor:
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))

    def get_tokens(self, text):
        if not text:
            return []
        
        text = text.lower().strip()
        
        text = text.translate(str.maketrans('', '', string.punctuation))
        tokens = word_tokenize(text)
        
        processed_tokens = []
        for token in tokens:
            if token not in self.stop_words and token.isalpha() and len(token) > 2:
                lemmatized = self.lemmatizer.lemmatize(token)
                processed_tokens.append(lemmatized)
        
        return processed_tokens