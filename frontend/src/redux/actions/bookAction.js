import { CLEAR_BOOK_DETAILS, SET_BOOKS, SET_BOOK_BY_ID } from "../constants/bookConstants";

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
  });

  export const setBookById = (book) => ({
    type: SET_BOOK_BY_ID,
    payload: book,
  });

  export const fetchBookById = (bookId) => (dispatch, getState) => {
    const books = getState().books.books;
    const selectedBook = books.find((book) => book._id=== bookId);
  
    if (selectedBook) {
      dispatch(setBookById(selectedBook));
    } else {
      console.error('Book not found');
      // You might want to handle this error case appropriately
    }
  };
  
  // New action for clearing selected book details
  export const clearBookDetails = () => ({
    type: CLEAR_BOOK_DETAILS,
  });