import React from 'react';
import Book from '../Book/Book.js';

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
                            title={book.title}
                            author={book.authors[0]? book.authors[0]: ''}
                            cover={book.imageLinks.smallThumbnail}
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