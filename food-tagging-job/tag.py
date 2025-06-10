from dataclasses import dataclass, field
from typing import Set

@dataclass
class Tag:
    positive_keywords: Set[str] = field(default_factory=set)
    negative_keywords: Set[str] = field(default_factory=set)
    default: bool = True