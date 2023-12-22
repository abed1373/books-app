import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { fetchBookById } from '../redux/actions/bookAction';
import { addToCart } from '../redux/actions/cartAction';

const ProductDetail = () => {
    const {bookId}=useParams()
  console.log(bookId)
  const dispatch = useDispatch();
  const selectedBook = useSelector((state) => state.books.selectedBook);
  
 const navigate=useNavigate()
 

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchBookById(bookId));
  }, [dispatch, bookId]);

 

  const handleAddToCart = () => {
   navigate(`/cart/${bookId}?quantity=${quantity}`)
  };

  if (!selectedBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div>
        {selectedBook.image && (
          <img
            src={`http://localhost:5001/${selectedBook.image.path.replace(
              /\\/g,
              '/'
            )}`}
            alt={selectedBook.image.filename}
            style={{ maxWidth: '150px', margin: '10px' }}
          />
        )}
        <h2>{selectedBook?.title.name}</h2>
        <p>{selectedBook?.author.name}</p>
        <p>{selectedBook?.category.name}</p>
        <p>{selectedBook?.subcategory.name}</p>
        <b style={{ display: 'block' }}>${selectedBook?.price}</b>
        <div>
            <label>Quantity:</label>
            <input type="number"
            min='1'
            value={quantity}
            onChange={(e)=>setQuantity(parseInt(e.target.value, 10))}
            />
        </div>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
