from ..models.book_models import Book
from ..routes.database import db
from bson import ObjectId

async def add_book(book: Book):
    book_dict = book.dict()
    result = await db["books"].insert_one(book_dict)
    return str(result.inserted_id)

async def get_books():
    books = []
    async for book in db["books"].find():
        books.append(Book(**book))
    return books

async def get_book_by_id(book_id: str):
    book = await db["books"].find_one({"_id": ObjectId(book_id)})
    if book:
        return Book(**book)
    return None

async def update_book(book_id: str, book: Book):
    await db["books"].update_one({"_id": ObjectId(book_id)}, {"$set": book.dict()})
    return True

async def delete_book(book_id: str):
    await db["books"].delete_one({"_id": ObjectId(book_id)})
    return True
