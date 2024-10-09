import { useState, useEffect } from "react";
import { getBookById } from "../Services/bookServices";

const BookDetail = ( match ) => {
  const [book, setBook] = useState(null);
  const bookId = match.params.id;

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await getBookById(bookId);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book", error);
    }
  };

  if (!book) {
    return <div> Loading... </div>;
  }

  return (
    <div className="container mt-5">
      <h2> {book.title} </h2>{" "}
      <p>
        {" "}
        <strong> Author: </strong> {book.author}
      </p>
      <p>
        {" "}
        <strong> Description: </strong> {book.description}
      </p>
      <p>
        {" "}
        <strong> Price: </strong> ${book.price}
      </p>
    </div>
  );
};

export default BookDetail;
