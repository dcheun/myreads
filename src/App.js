import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import ListScreen from "./screens/ListScreen";
import SearchScreen from "./screens/SearchScreen";

class BooksApp extends React.Component {
  state = {
    books: {},
  };

  retrieveBooks = async () => {
    const _books = await BooksAPI.getAll();
    // Convert to obj.
    const books = {};
    for (let b of _books) {
      books[b.id] = b;
    }
    this.setState({ books });
  };

  componentDidMount() {
    this.retrieveBooks();
  }

  onShelfChange = async (book, shelf) => {
    try {
      await BooksAPI.update(book, shelf);
      const updatedBook = await BooksAPI.get(book.id);

      this.setState((prevState) => ({
        books: { ...prevState.books, [updatedBook.id]: updatedBook },
      }));

      let msg = "";
      if (shelf === "none") {
        msg = `Book "${book.title}" has been removed from bookshelf`;
      } else {
        msg = `Book "${book.title}" has been moved to ${shelf} shelf`;
      }
      setTimeout(() => alert(msg), 1);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchScreen
              currBooks={books}
              onShelfChange={this.onShelfChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ListScreen
              books={Object.values(books)}
              onShelfChange={this.onShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
