import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { BookList }
        /> <
        Route path = "/books/new"
        component = { BookForm }
        /> <
        Route path = "/books/:id"
        component = { BookDetail }
        /> < /
        Switch > <
        /div> < /
        Router >
    );
}

export default App;