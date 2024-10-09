import { createBook, updateBook } from "../Services/bookServices";
import { useState } from "react";

const BookForm = ( existingBook, isEditMode ) => {
  const [book, setBook] = useState(
    existingBook || {
      title: "",
      author: "",
      description: "",
      price: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateBook(existingBook.id, book);
    } else {
      await createBook(book);
    }
    window.location.reload(); // Reload the page to show the updated book list
  };

  return (
    <div className="container mt-5">
      <h2> {isEditMode ? "Edit Book" : "Add New Book"} </h2>{" "}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> Title </label>{" "}
          <input
            type="text"
            className="form-control"
            name="title"
            value={book.title}
            onChange={handleInputChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Author </label>{" "}
          <input
            type="text"
            className="form-control"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Description </label>{" "}
          <textarea
            className="form-control"
            name="description"
            value={book.description}
            onChange={handleInputChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Price </label>{" "}
          <input
            type="number"
            className="form-control"
            name="price"
            value={book.price}
            onChange={handleInputChange}
          />{" "}
        </div>{" "}
        <button type="submit" className="btn btn-primary">
          {" "}
          {isEditMode ? "Update Book" : "Add Book"}{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default BookForm;
