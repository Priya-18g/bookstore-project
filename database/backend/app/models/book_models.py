from pydantic import BaseModel, Field
from typing import Optional

class Book(BaseModel):
    id: Optional[str]
    title: str = Field(...)
    author: str = Field(...)
    description: str = Field(...)
    price: float = Field(...)
