import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
const loadCartItemsFromLocalStorage = () => {
  try {
    const serializedCartItems = localStorage.getItem('cartItems');
    return serializedCartItems ? JSON.parse(serializedCartItems) : [];
  } catch (error) {
    console.error('Error loading cart items from localStorage', error);
    return [];
  }
};

const initialState = {
  cartItems: loadCartItemsFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { book, quantity } = action.payload;
      const itemExists = state.cartItems.find((item) => item._id === book._id);

      if (itemExists) {
        // If the item is already in the cart, update the quantity
        const updatedCartItems = state.cartItems.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item is not in the cart, add it
        const updatedCartItems = [...state.cartItems, { ...book, quantity }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      case REMOVE_FROM_CART:
        const bookIdToRemove = action.payload;
        const filteredCartItems=state.cartItems.filter((item)=>item._id !== bookIdToRemove);
        localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
        return {
          ...state,
          cartItems:filteredCartItems,
        }

       
    default:
      return state;
  }
};

export default cartReducer;
