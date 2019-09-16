import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

export default class Search extends Component {
  state = {
    search: "",
    results: []
  };

  handlesearch = search => {
    this.setState({ search }, () => this.results(search));
  };

  results = search => {
    BooksAPI.search(search.trim()).then(results => {
      if (!results || results.hasOwnProperty("error")) {
        this.setState({
          results: []
        });
      } else {
        this.setState({
          results: results.map(book => {
            const matchingBooks = this.props.books.filter(
              shelfBook => shelfBook.id === book.id
            );
            if (matchingBooks.length > 0) {
              book.shelf = matchingBooks[0].shelf;
            } else {
              book.shelf = "none";
            }
            return book;
          })
        });
      }
    });
  };

  render() {
    const { changeShelf } = this.props;
    const { results } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              autoFocus
              value={this.state.search}
              onChange={e => {
                this.handlesearch(e.target.value);
              }}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {results.map(book => {
              return (
                <Book book={book} key={book.id} changeShelf={changeShelf} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
