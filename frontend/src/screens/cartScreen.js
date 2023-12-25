import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/actions/cartAction';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const removeFromCartHandler = (bookId) => {
    dispatch(removeFromCart(bookId))
  }

  const calculateTotalPrice = () => {
    
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const calculateTotalQuantity = () => {
    
    return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  };

  return (
    <div className="cart-screen">
      <Link to={'/'}>Home</Link>

      <div className="left-cart">
        {cartItems?.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems?.map((item) => (
              <li key={item._id}>
                {item?.image && (
                  <img
                    src={`http://localhost:5001/${item.image.path.replace(
                      /\\/g,
                      '/'
                    )}`}
                    alt={item.image.filename}
                    style={{ maxWidth: '70px', margin: '10px' }}
                  />
                )}

                <p>Quantity:{item.quantity}</p>
                <p>Author:{item?.author?.name}</p>
                <p>Category:{item?.category?.name}</p>
                <p>Subcategory:{item?.subcategory?.name}</p>
                <h3>
                  Price:$<strong>{item?.price}</strong>
                </h3>
                <button className='delete-button'
                      type="button"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      Delete
                    </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="right-cart">
        <li>
          <h4> Total Quantity: ({calculateTotalQuantity()})  <br /> Total Price: ${calculateTotalPrice()}</h4>
        </li>
        <li>
          <button type='button'>Procced to Checkout</button>
        </li>
      </div>
    </div>
  );
};
export default CartScreen;
