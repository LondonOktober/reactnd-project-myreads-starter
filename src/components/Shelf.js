import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

export default class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, i) => (
              <Book key={i} book={book} changeShelf={this.props.changeShelf} />
            ))}
          </ol>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button />
          </Link>
        </div>
      </div>
    );
  }
}
