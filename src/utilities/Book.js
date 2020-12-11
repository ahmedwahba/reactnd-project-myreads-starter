const sectionsType = {
    CURRNETLY_READING: "currentlyReading",
    WANT_TO_READ: "wantToRead",
    READ: "read",
    NONE: "none",
};

const checkInCurrentShelfs = (book) => {
    const localBooks = localStorage.getItem("books") ? JSON.parse( localStorage.getItem("books")) : '';
    let currentShelf =  sectionsType.NONE;
    if (localBooks && localBooks.length > 0) {
        for(let localBook of localBooks ){
            if (localBook.id === book.id) {
                currentShelf = localBook.shelf;
                break;
            }
        };
    }
    return currentShelf;
};

const fetchBookDetails = (book) => {
    const bookDetails = {};
    bookDetails.id = book.id;
    if (book.title) {
        bookDetails.title = book.title;
    }
    if (book.authors && book.authors.length > 0) {
        bookDetails.author = book.authors.toString();
    }
    if (book.imageLinks && book.imageLinks.smallThumbnail) {
        bookDetails.cover = book.imageLinks.smallThumbnail;
    }
    if (book.shelf) {
        bookDetails.shelf = book.shelf;
    } else {
        bookDetails.shelf = checkInCurrentShelfs(book);
    }

    return bookDetails;
};

export { sectionsType, fetchBookDetails };