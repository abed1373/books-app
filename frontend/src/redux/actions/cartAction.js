import {ADD_TO_CART,  REMOVE_FROM_CART} from '../constants/cartConstants';

export const addToCart = (book, quantity) => (dispatch, getState) => {
  // Dispatch ADD_TO_CART action
  dispatch({
    type:ADD_TO_CART,
    payload: { book, quantity },
  });

  // Save the entire cart state to localStorage
  const updatedCartItems = getState().cart.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
};


export const removeFromCart = (bookId) => ({
  type: REMOVE_FROM_CART,
  payload: bookId,
});

