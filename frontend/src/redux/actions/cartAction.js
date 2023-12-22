import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from '../constants/cartConstants';

export const addToCart = (bookId) => ({
  type: ADD_TO_CART,
  payload: bookId,
});

export const removeFromCart = (bookId) => ({
  type: REMOVE_FROM_CART,
  payload: bookId,
});

export const updateQuantity = (bookId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: bookId, quantity },
});
