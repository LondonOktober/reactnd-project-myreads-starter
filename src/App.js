import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import "./App.css";

export default class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(res => {
      this.setState({ books: res });
    });
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home changeShelf={this.changeShelf} books={this.state.books} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search books={this.state.books} changeShelf={this.changeShelf} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
