import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export const Bookshelf = ({ title, friendlyTitle, books }) => {
  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{friendlyTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                imageLink={book.imageLinks.thumbnail}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  friendlyTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default Bookshelf;
