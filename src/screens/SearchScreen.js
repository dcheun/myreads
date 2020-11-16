import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";

export class SearchScreen extends Component {
  static propTypes = {
    currBooks: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  state = {
    searchVal: "",
    books: [],
  };

  runSearch = async (searchVal) => {
    try {
      const books = await search(searchVal);
      if (Array.isArray(books)) {
        this.setState({ books });
      } else {
        this.setState({ books: [] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  onInputChange = (e) => {
    const searchVal = e.target.value;
    this.setState({ searchVal });
    if (!searchVal) {
      this.setState({ books: [] });
      return;
    }
    this.runSearch(searchVal);
  };

  getShelf = (book) => {
    const { currBooks } = this.props;
    if (book.id in currBooks) {
      return currBooks[book.id].shelf;
    }
    return "none";
  };

  render() {
    const { searchVal, books } = this.state;
    const { onShelfChange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onInputChange}
              value={searchVal}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onShelfChange={onShelfChange}
                  shelf={this.getShelf(book)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchScreen;
