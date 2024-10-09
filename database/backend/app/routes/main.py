from fastapi import FastAPI
from app.routes.book_routes import router as book_router

app = FastAPI()

app.include_router(book_router)
