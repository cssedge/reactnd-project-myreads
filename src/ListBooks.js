import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./Components/BookShelf";
import Header from "./Header";

export default class ListBooks extends Component {
  render() {
    const { books, shelves, reArrangeBooks, placeHolder } = this.props;
    // console.log('shelves: ', shelves);
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {shelves
              .filter((shelf) => shelf !== "none")
              .map((shelf) => (
                // const bookCategory = books.filter(book => book.shelf === shelf.key )

                <BookShelf
                  key={shelf}
                  shelf={shelf}
                  books={books.filter((book) => book.shelf === shelf)}
                  reArrangeBooks={reArrangeBooks}
                  placeHolder={placeHolder}
                />
              ))}

            {/* <BookShelf title={"Currently Reading"} books={books} />
                <BookShelf title={"Want to Read"} />
                <BookShelf title={"Read"} /> */}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
