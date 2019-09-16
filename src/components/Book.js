import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: "128px",
                height: "193px",
                backgroundImage: `url(${book.imageLinks &&
                  book.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf}
                onChange={e => {
                  this.props.changeShelf(this.props.book, e.target.value);
                }}
              >
                <option value="move" disabled>
                  Move to:
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Finished</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </li>
    );
  }
}
