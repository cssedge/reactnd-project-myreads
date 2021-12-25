import React from "react";
import * as BooksAPI from "./Api/BooksAPI";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import { debounce } from "throttle-debounce";
import PlaceHolder from "./images/placeholder.jpg";

class BooksApp extends React.Component {
  state = {
    // showSearchPage: false,
    // books: getAll,

    books: [],
    shelves: [],
    searchList: [],
  };

  getAllBooks(books) {
    this.setState({
      books,
      shelves: [...new Set(books.map((book) => book.shelf))],
    });
  }

  componentDidMount() {
    // get all Books and extract shelves
    BooksAPI.getAll().then((books) => {
      this.getAllBooks(books);
    });
  }

  searchQuery = debounce(250, false, (query) => {
    // console.log("query :", query);
    query.length > 1
      ? BooksAPI.search(query).then((b) => {
          // console.log("b :", b);
          b.error
            ? this.setState({ searchList: [] })
            : this.setState({ searchList: b });
        })
      : this.setState({ searchList: [] });
  });

  reArrangeBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let updatedSearchBooks = [];
    updatedSearchBooks = this.state.books.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedSearchBooks = updatedSearchBooks.concat(book);
    }

    this.setState({ books: updatedSearchBooks });
    this.getAllBooks(updatedSearchBooks);
    this.setState({
      shelves: [...new Set(this.state.books.map((book) => book.shelf))],
    });

    // BooksAPI.update(book, shelf);
    // BooksAPI.getAll().then((books) => {
    //   this.setState({books,
    //     shelves: [...new Set(this.state.books.map((book) => book.shelf))]})
    // })
  };

  clearSearch = () => {
    this.setState({ searchList: [] });
  };

  render() {
    // console.log("MountedBooks: ", this.state.books);
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Switch>
          {/* <Route exact path="/" component={ListBooks}> */}
          {/* <Route path="/search" component={SearchBooks} /> */}

          <Route exact path="/">
            <ListBooks
              books={books}
              shelves={shelves}
              reArrangeBooks={this.reArrangeBooks}
              placeHolder={PlaceHolder}
            />
          </Route>

          <Route path="/search">
            <SearchBooks
              books={this.state.books}
              searchList={this.state.searchList}
              shelves={shelves}
              reArrangeBooks={this.reArrangeBooks}
              handleSearch={this.searchQuery}
              handleClear={this.clearSearch}
              placeHolder={PlaceHolder}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
