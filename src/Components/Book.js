import React, { Component } from "react";
import ShelfControl from "./ShelfControl";

export default class Book extends Component {
  render() {
    const {
      book,
      title,
      cover,
      authors,
      id,
      shelf,
      reArrangeBooks,
    } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${cover})`,
              }}
            />

            <ShelfControl
              id={id}
              shelf={shelf ? shelf : "none"}
              book={book}
              reArrangeBooks={reArrangeBooks}
            />
          </div>
          <div className="book-title">{title}</div>
          <ul className="book-authors">
            {authors ? (
              <>
                {authors.map((author) => {
                  return <li key={author}> {author} </li>;
                })}
              </>
            ) : (
              <li> {""} </li>
            )}
          </ul>
        </div>
      </li>
    );
  }
}
