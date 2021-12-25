import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
  render() {
    const { shelf, books, reArrangeBooks, placeHolder } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {shelf === "currentlyReading" && "Currently Reading"}
          {shelf === "wantToRead" && "Want to Read"}
          {shelf === "read" && "Read"}
        </h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 ? (
              <>
                {books
                  .filter((book) => book.shelf !== "none")
                  .map((book) => (
                    <Book
                      key={book.id}
                      book={book}
                      title={book.title}
                      cover={
                        book.imageLinks
                          ? book.imageLinks.thumbnail
                          : placeHolder
                      }
                      authors={book.authors}
                      id={book.id}
                      shelf={shelf ? shelf : "none"}
                      reArrangeBooks={reArrangeBooks}
                    />
                  ))}
              </>
            ) : (
              <>
                <p className="emptyShelf">
                  {shelf === "currentlyReading" && "Currently Reading "}
                  {shelf === "wantToRead" && "Want to Read "}
                  {shelf === "read" && "Read "}
                  Shelf is Empty...!
                </p>
              </>
            )}

            {/* {books.map(
                        book => (
                          <Book 
                            key={book.id}
                            book={book}
                            title={book.title} 
                            cover={book.imageLinks.smallThumbnail} 
                            authors={book.authors}
                            id={book.id}
                            shelf={shelf}
                            reArrangeBooks={reArrangeBooks}
                          />
                      )
                      )} */}

            {/* <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">Ender's Game</div>
                          <div className="book-authors">Orson Scott Card</div>
                        </div>
                      </li> */}
          </ol>
          <div className="shelf">
            <div className="bookend_left" />
            <div className="bookend_right" />
            <div className="reflection" />
          </div>
        </div>
      </div>
    );
  }
}
