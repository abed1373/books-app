import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HomeScreen = ({ match }) => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
  // const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch all books from the server
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/books');
        console.log('Books:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    // const fetchImages = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5001/api/images');
    //     console.log('Images:', response.data);
    //     setImages(response.data);
    //   } catch (error) {
    //     console.error('Error fetching images:', error);
    //   }
    // };

    fetchBooks();
    //fetchImages();
  }, []);

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
              //const image = images.find((img) => img._id === book.imageId);

              <div key={book._id}>
                <Link>
                  {' '}
                  {book.image && (
                    <img
                      src={`http://localhost:5001/${book.image.path.replace(
                        /\\/g,
                        '/'
                      )}`}
                      alt={book.image.filename}
                      style={{ maxWidth: '300px', margin: '10px' }}
                    />
                  )}
                </Link>

                <p><strong>Author:</strong>{book?.author.name} </p>
                <p><strong>Category:</strong>{book?.category.name}</p>
                <b>${book?.price}</b>

                <button>Add To Cart</button>
              </div>
            ))}
          </div>

          {/* <div>
            <Link>
              {' '}
              <img src="/assets/images/book-2.png" alt="" />
            </Link>
            <b>$15</b>
            <p>Author:Ferdosi</p>
            <button>Add To Cart</button>
          </div>
          <div>
            <Link>
              {' '}
              <img src="/assets/images/book-3.png" alt="" />
            </Link>
            <b>$14</b>
            <p>Author:Ferdosi</p>
            <button>Add To Cart</button>
          </div>
          <div>
            <Link>
              {' '}
              <img src="/assets/images/book-4.png" alt="" />
            </Link>
            <b>$16</b>
            <p>Author:Ferdosi</p>
            <button>Add To Cart</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
