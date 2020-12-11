import React from 'react';
import Book from '../Book/Book.js';
import { fetchBookDetails } from '../../utilities/Book';

class Section extends React.Component {

 render() {
    const {title, books} = this.props.section;

    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{title ? title: ''}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {books.length > 0 && books.map((book) => (
                          <li key={book.id}>
                          <Book 
                            bookDetails={fetchBookDetails(book)}
                            onShelfChange={this.props.onSectionChange}
                          />
                        </li>
                     ))}
                    </ol>
                  </div>
                </div>
    );
 }
}

export default Section;