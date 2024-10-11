import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from .book_routes import router as book_router

app = FastAPI()

app.include_router(book_router)
