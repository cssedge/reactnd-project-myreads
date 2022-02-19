import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Components/Book";
import Header from "./Header";

export default class SearchBooks extends Component {
  state = {
    inputTxt: "",
  };

  handleInput = (e) => {
    let query = e.target.value;
    this.setState({ inputTxt: query });
    // this.props.handleSearch(e.target.value);
    this.props.handleSearch(this.state.inputTxt);

    if (query.length === 0) {
      this.props.handleClear();
      this.setState({ inputTxt: "" });
    }

    // console.log("query: ", query.length)
  };

  render() {
    const {
      books,
      placeHolder,
      searchList,
      reArrangeBooks,
      handleClear,
    } = this.props;
    return (
      <div className="search-books">
        <Header />
        <div className="search-books-bar">
          {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
          <Link to="/">
            <button className="close-search" onClick={handleClear}>
              Close
            </button>
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by topic, ex: linux, javascript"
              value={this.state.inputTxt}
              onChange={this.handleInput}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {searchList.length >= 1 ? (
              <>
                {searchList.map((book) => {
                  let currentShelf = "none";
                  books.map((b) =>
                    b.id === book.id ? (currentShelf = b.shelf) : "none"
                  );
                  return (
                    <Book
                      key={book.id}
                      title={book.title}
                      cover={
                        book.imageLinks
                          ? book.imageLinks.thumbnail
                          : placeHolder
                      }
                      authors={book.authors}
                      id={book.id}
                      // shelf={book.shelf? book.shelf : 'none'}
                      shelf={currentShelf}
                      book={book}
                      // shelves={shelves}
                      reArrangeBooks={reArrangeBooks}
                    />
                  );
                })}
              </>
            ) : (
              <p className="emptyShelf emptySearch">
                No Books found! <br />
                Use search bar to find your favourite books...ex: react, android, ...etc
              </p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
