import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import "./App.css";
import ListScreen from "./screens/ListScreen";
import SearchScreen from "./screens/SearchScreen";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchScreen} />
        <Route exact path="/" component={ListScreen} />
      </div>
    );
  }
}

export default BooksApp;
