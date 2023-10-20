import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
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
              <p>new version</p>
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
           <Link> <img src="/assets/images/book-1.png" alt="" /></Link>
            <button>Add To Cart</button>
          </div>
          <div>
          <Link> <img src="/assets/images/book-2.png" alt="" /></Link>
            <button>Add To Cart</button>
          </div>
          <div>
          <Link> <img src="/assets/images/book-3.png" alt="" /></Link>
            <button>Add To Cart</button>
          </div>
          <div>
          <Link> <img src="/assets/images/book-4.png" alt="" /></Link>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
