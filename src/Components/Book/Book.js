import React from 'react';
import Options from '../Options/Options.js';

function Book (props) {
    const {title, cover, author } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                     style={{ width: 128, height: 193, backgroundImage: cover ? `url("${cover}")`: 'none' }}>
                </div>
                <div className="book-shelf-changer">
                    <Options />
                </div>
            </div>
            <div className="book-title">{title? title: ''}</div>
            <div className="book-authors">{author? author: ''}</div>
      </div>
    );
}

export default Book;