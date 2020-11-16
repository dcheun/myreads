import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BookShelf from "../components/Bookshelf";

export const ListScreen = ({ books, onShelfChange }) => {
  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const readBooks = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <BookShelf
            friendlyTitle="Currently Reading"
            books={currentlyReadingBooks}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            friendlyTitle="Want To Read"
            books={wantToReadBooks}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            friendlyTitle="Read"
            books={readBooks}
            onShelfChange={onShelfChange}
          />
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
