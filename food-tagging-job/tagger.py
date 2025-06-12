from typing import Set, List
from lib import get_all_hypernyms_recursive
from tag import Tag

class Tagger:
    def __init__(self, nlp_processor):
        self.tags: dict[str, Tag] = {}
        self.nlp_processor = nlp_processor

    def add_tag(self, tag_name: str, data: Tag):
        self.tags[tag_name] = data

    def check_keywords(self, word: str, keywords: Set[str]) -> bool:
        if word in keywords:
            return True
        
        hypernyms = get_all_hypernyms_recursive(word, max_depth=2)
        for hypernym in hypernyms:
            if hypernym in keywords:
                return True
            
        return False
    
    def check_phrases(self, phrases, description):
        return any([phrase in description.lower() for phrase in phrases])

    def check_tag(self, tag_name: str, description: str) -> bool:
        negative_keywords = self.tags[tag_name].negative_keywords
        positive_keywords = self.tags[tag_name].positive_keywords
        default = self.tags[tag_name].default

        if self.check_phrases(negative_keywords, description):
            return False
        
        if self.check_phrases(positive_keywords, description):
            return True
        
        tokens = self.nlp_processor.get_tokens(description)

        for token in tokens:
            if self.check_keywords(token, negative_keywords):
                return False
            
            if self.check_keywords(token, positive_keywords):
                return True

        return default

    def get_tags(self: str, description: str) -> List[str]:
        tags = []
        for tag in self.tags.keys():
            if self.check_tag(tag, description):
                tags.append(tag)

        return tags