import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import ListScreen from "./screens/ListScreen";
import SearchScreen from "./screens/SearchScreen";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  retrieveBooks = async () => {
    const books = await BooksAPI.getAll();
    console.log(books);
    this.setState({ books });
  };

  componentDidMount() {
    this.retrieveBooks();
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" component={SearchScreen} />
        <Route exact path="/" render={() => <ListScreen books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
