import React, { Component } from "react";
import Shelf from "./Shelf";

export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div>
                <Shelf
                  changeShelf={this.props.changeShelf}
                  books={this.props.books.filter(
                    b => b.shelf === "currentlyReading"
                  )}
                  shelf={"Currently Reading"}
                />
                <Shelf
                  changeShelf={this.props.changeShelf}
                  books={this.props.books.filter(b => b.shelf === "wantToRead")}
                  shelf={"Want to Read"}
                />
                <Shelf
                  changeShelf={this.props.changeShelf}
                  books={this.props.books.filter(b => b.shelf === "read")}
                  shelf={"Finished"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
