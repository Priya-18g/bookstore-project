import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async() => {
        try {
            const response = await getBooks();
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books', error);
        }
    };

    return ( <
        div className = "container mt-5" >
        <
        h2 > Book List < /h2> <
        ul className = "list-group" > {
            books.map((book) => ( <
                li className = "list-group-item"
                key = { book.id } > { book.title }
                by { book.author } <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default BookList;