import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import ListScreen from "./screens/ListScreen";
import SearchScreen from "./screens/SearchScreen";

class BooksApp extends React.Component {
  state = {
    // Books (key: value) are stored in form (id: Book).
    // This makes searching if a Book is already in the shelf more
    // straightforward in SearchScreen.
    // Note that it is passed as an array to ListScreen.
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
    // Do initial retrieve of all books on shelf after
    // component first mounted.
    this.retrieveBooks();
  }

  // Callback passed to child components for updating books on shelves.
  onShelfChange = async (book, shelf) => {
    try {
      // Call update book, then retrieve the book again to get
      // the updated shelf field on the object.
      await BooksAPI.update(book, shelf);
      const updatedBook = await BooksAPI.get(book.id);

      // Call set state to re-render and update UI.
      this.setState((prevState) => ({
        books: { ...prevState.books, [updatedBook.id]: updatedBook },
      }));

      // Display an alert to user to confirm the action performed.
      // This is more useful in the search screen.
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
