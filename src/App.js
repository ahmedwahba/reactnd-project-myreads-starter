import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Section from './Components/Section/Section';

class BooksApp extends React.Component {
  sectionsType = {
    CURRNETLY_READING: "currentlyReading",
    WANT_TO_READ: "wantToRead",
    READ: "read",

  };

  sections = {
    [this.sectionsType.CURRNETLY_READING] : {
      title: "Currently Reading",
      books: [],
    },
    [this.sectionsType.WANT_TO_READ] :{
      title: "Want to Read",
      books: [],
    },
    [this.sectionsType.READ] :{
      title: "Read",
      books: [],
    }
  };

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    currentSections: this.sections,
  }

  componentDidMount() {
    console.log('dddddd', this.sections)
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      console.log('books', books);
      books.map((book) => {
        this.sections[book.shelf].books.push(book);
      });
      this.setState({currentSections: this.sections});
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Section 
                  section={this.state.currentSections[this.sectionsType.CURRNETLY_READING]}
                />
                <Section 
                  section={this.state.currentSections[this.sectionsType.WANT_TO_READ]}
                />
                <Section 
                  section={this.state.currentSections[this.sectionsType.READ]}
                />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
