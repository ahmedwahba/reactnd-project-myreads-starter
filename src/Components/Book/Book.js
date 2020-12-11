import React from 'react';
import Options from '../Options/Options.js';
import * as BooksAPI from '../../BooksAPI';

function Book (props) {
    const {title, cover, author, shelf, id } = props.bookDetails;
    const { onShelfChange } = props;
    const onChange = (e) => {
        const newShelf = e.target.value;
        if (shelf !== newShelf) {
            BooksAPI.update(id,newShelf).then((res) => {
                onShelfChange && onShelfChange(id, newShelf, shelf); 
            })
        }
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                     style={{ width: 128, height: 193, backgroundImage: cover ? `url("${cover}")`: 'none' }}>
                </div>
                <div className="book-shelf-changer">
                    <Options currentSelection={shelf} onOptionChange={onChange} />
                </div>
            </div>
            <div className="book-title">{title? title: ''}</div>
            <div className="book-authors">{author? author: ''}</div>
      </div>
    );
}

export default Book;