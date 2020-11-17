# MyReads - A Book Lending App

MyReads is a react application that help users organize books that they are reading or planning to read.

## Features

The interface includes two screens.

- The main screen is a virtual bookshelf that lists all books the user have checked out. It is organized into 3 shelves:
  - Currently Reading
  - Want To Read
  - Read
- A search screen that allows user to search by book title or author with real time results.

The search queries a back end database with a library of books to choose from.

It also uses react-router-dom to create URL routes that allow browser back/forward functionality and pages that can be bookmarked/shared.

## Usage

For books that are currently listed in the bookshelf, use the drop down list button to choose from a list of shelves to move the book into. Choosing "none" will remove the book from the bookshelf entirely.

Use the "+" button near the bottom of the main screen to search for and add books to the bookshelf.

Books that appear in search results also have the same drop down list functionality. To save a book to the bookshelf, simply select which shelf to categorize it under and it will appear on the shelf when navigating back.

Note that also if a book that is already on the shelf appears in the search results, the drop down list will indicate which shelf it is already categorized under. Otherwise the list will have "none" selected as the value.

### Install Dependencies

```
npm install
```

### Run

The project was created with create-react-app, which uses webpack under the hood. Therefore, running npm start should automatically launch the application on a new browser window with webpack dev server.

```
npm start
```

To build for production:

```
npm run build
```

## Project Details

The project builds from a starter template provided by Udacity's React course. The template contains static CSS/HTML to be used.

The project also provides a backend server which is pointed to by the provided BooksAPI.js file. This application performs the necessary API calls to retrieve and formats the results accordingly for display on the UI.

## Important Note on Searching

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
