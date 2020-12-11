import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import Section from '../Components/Section/Section';
import { sectionsType } from '../utilities/Book';

class Main extends React.Component {
  sections = {
    [sectionsType.CURRNETLY_READING] : {
      title: "Currently Reading",
      books: [],
    },
    [sectionsType.WANT_TO_READ] :{
      title: "Want to Read",
      books: [],
    },
    [sectionsType.READ] :{
      title: "Read",
      books: [],
    }
  };

  state = {
    currentSections: this.sections,
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      localStorage.setItem("books", JSON.stringify(books));
      books.forEach((book) => {
        this.sections[book.shelf].books.push(book);
      });
      this.setState({currentSections: this.sections});
    })
  }

  onSectionChange = (bookId, newShelf, currentSection) => {
    const { currentSections } = this.state;
    if (currentSections[currentSection]) {
        let books = currentSections[currentSection].books;
        const activeBookIndex = books.findIndex((book) =>{
            return book.id === bookId; /* return index of book in current section */
        });
        books[activeBookIndex].shelf = newShelf;  
        let book = books[activeBookIndex];
        currentSections[currentSection].books.splice(activeBookIndex,1);/* remove book from current section */
        if (currentSections[newShelf]) {
            currentSections[newShelf].books.push(book);/* add book to the new section */
        }
        this.setState({ currentSections: currentSections}); 
    }
 }

  render() {
    const { currentSections } = this.state;
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Section 
                  section={currentSections[sectionsType.CURRNETLY_READING]}
                  onSectionChange={this.onSectionChange}
                />
                <Section 
                  section={currentSections[sectionsType.WANT_TO_READ]}
                  onSectionChange={this.onSectionChange}
                />
                <Section 
                  section={currentSections[sectionsType.READ]}
                  onSectionChange={this.onSectionChange}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to={'/search'} >
                <button >Add a book</button>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Main
