import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBooks } from  '../redux/actions/bookAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  

  

  useEffect(() => {
    // Fetch all books from the server
    axios.get('http://localhost:5001/api/books')
      .then((response) => {
        // Dispatch an action to set the books in the Redux store
        dispatch(setBooks(response.data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

 

  return (
    <div className="main-cont">
      <Header />

      <div className="home-container">
        <div className="home-main-row">
          <h1>Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            debitis laboriosam repudiandae esse! Esse, porro!
          </p>
          <div className="home-button">
            <button>NowNow</button>
            <button>Done</button>
          </div>
        </div>
        <div className="home-image-icon">
          <ul>
            <li>
              <img src="/assets/images/home-icon-1.png" alt="" />
              <h3>Novel</h3>
              <p>old version</p>
            </li>

            <li>
              <img src="/assets/images/home-icon.png" alt="" />
              <h3>Fiction</h3>
              <p>new version</p>
            </li>
          </ul>
          <hr />
        </div>
        <div className="home-image-books">
          <div>
            {books.map((book) => (
              <div key={book._id}>
                {' '}
                {book.image && (
                  <Link
                  to={`/${book._id}`}
                   
                  >
                    <img
                      src={`http://localhost:5001/${book.image.path.replace(
                        /\\/g,
                        '/'
                      )}`}
                      alt={book.image.filename}
                      style={{ maxWidth: '300px', margin: '10px' }}
                    />
                  </Link>
                )}
                <p>
                  <strong>Author:</strong>
                  {book?.author.name}{' '}
                </p>
                <p>
                  <strong>Category:</strong>
                  {book?.category.name}
                </p>
                <p>
                  <strong>Subcategory:</strong>
                  {book?.subcategory.name}
                </p>
                <b>${book?.price}</b>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
