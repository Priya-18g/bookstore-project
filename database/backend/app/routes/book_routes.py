from fastapi import APIRouter, HTTPException
from app.controllers.book_controllers import add_book, get_books, get_book_by_id, update_book, delete_book
from app.models.book_models import Book

router = APIRouter()

@router.post("/books", response_model=Book)
async def create_book(book: Book):
    return await add_book(book)

@router.get("/books", response_model=list[Book])
async def read_books():
    return await get_books()

@router.get("/books/{book_id}", response_model=Book)
async def read_book(book_id: str):
    book = await get_book_by_id(book_id)
    if book:
        return book
    raise HTTPException(status_code=404, detail="Book not found")

@router.put("/books/{book_id}", response_model=Book)
async def update_existing_book(book_id: str, book: Book):
    updated = await update_book(book_id, book)
    if updated:
        return book
    raise HTTPException(status_code=404, detail="Book not found")

@router.delete("/books/{book_id}")
async def delete_book_by_id(book_id: str):
    deleted = await delete_book(book_id)
    if deleted:
        return {"status": "success"}
    raise HTTPException(status_code=404, detail="Book not found")
