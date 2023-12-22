import { CLEAR_BOOK_DETAILS, SET_BOOKS, SET_BOOK_BY_ID } from "../constants/bookConstants";

const initialState = {
  books: [],
  selectedBook: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
      case SET_BOOK_BY_ID:
        return { ...state, selectedBook: action.payload };
      case CLEAR_BOOK_DETAILS:
        return { ...state, selectedBook: null };
    default:
      return state;
  }
};

export default bookReducer;