import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../Components/Book/Book.js';
import { fetchBookDetails } from '../utilities/Book';

class Search extends React.Component {
  search;
  state = {
    books: [],
    isEmpty: false,
  }
  onInputChange = () => {
    this.setState({ books: [], isEmpty: false });
    if (this.search.value.length > 2) {
      this.searchForBook(this.search.value)
    }
  }

  searchForBook = (keyword) => {
    BooksAPI.search(keyword).then((books) => {
      if (!books.error && books.length > 0) {
        this.setState({ books: books });
      } else {
        this.setState({ isEmpty: true });
      }
    })
  }

  onShelfChange = (bookId, newShelf) => {
    const activeBookIndex = this.state.books.findIndex((book) =>{
      return book.id === bookId;
    });
    let books = this.state.books;
    books[activeBookIndex].shelf = newShelf;
    this.setState({ books: books});
  }

  render() {
    const { books, isEmpty } = this.state;

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to={'/'}>
                <button className="close-search" >Close</button>
              </Link>
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" ref={(r) => this.search = r} onChange={this.onInputChange}/>

            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
            {books.length > 0 && books.map((book) => (
                          <li key={book.id}>
                          <Book 
                            bookDetails={fetchBookDetails(book)}
                            onShelfChange={this.onShelfChange}
                          />
                        </li>
                     ))}
            </ol>
            {isEmpty && <h2 className="bookshelf-title">Try using more meaningful keyword</h2>}
            </div>
        </div>
       );
   }
}

export default Search