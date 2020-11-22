import React from "react";
import PropTypes from "prop-types";

export class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    shelf: PropTypes.string,
  };

  state = {
    // For keeping track and setting drop down list value.
    shelfName: "",
  };

  componentDidMount() {
    const { book, shelf } = this.props;
    // Set the drop down list category accordingly.
    const shelfName = shelf || book.shelf || "none";
    this.setState({ shelfName });
  }

  shelfChangeHandler = (e) => {
    const shelf = e.target.value;
    this.setState({ shelfName: shelf });
    this.props.onShelfChange(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;
    const { shelfName } = this.state;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? book.imageLinks.thumbnail
                  ? `url("${book.imageLinks.thumbnail}")`
                  : ""
                : "",
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.shelfChangeHandler} value={shelfName}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(", ") ?? ""}</div>
      </div>
    );
  }
}

Book.propTypes = {};

export default Book;
