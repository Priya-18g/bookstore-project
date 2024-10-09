import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BookList from "../components/Booklist";
import BookDetail from "../components/bookdetail";
import BookForm from "../components/bookform";
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" exact component={BookList} />{" "}
          <Route path="/books/new" component={BookForm} />{" "}
          <Route path="/books/:id" component={BookDetail} />{" "}
        </Routes>



      </div>{" "}
    </Router>
  );
}

export default App;
