import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BookShelf from "../components/Bookshelf";

const SHELVES = [
  {
    title: "Currently Reading",
    id: "currentlyReading",
  },
  {
    title: "Want To Read",
    id: "wantToRead",
  },
  {
    title: "Read",
    id: "read",
  },
];

export const ListScreen = ({ books, onShelfChange }) => {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          {SHELVES.map((shelf) => (
            <BookShelf
              key={shelf.id}
              friendlyTitle={shelf.title}
              onShelfChange={onShelfChange}
              books={books.filter((book) => book.shelf === shelf.id)}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

ListScreen.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ListScreen;
