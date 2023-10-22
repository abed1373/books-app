import Footer from '../components/Footer';
import Header from '../components/Header';

const BookStore = () => {
  return (
    <div>
      <Header />
      <div className="store-container">
        {/* ----------------------------left------------------------ */}
        <div className="left-store">
          <h3>Shopout</h3>
          <p>Lorem ipsum dolor sit amet adipisicing.</p>
          <div>
            <hr />
            <span className="quantity">Quantity</span>
            <div className="book-box">
              <img src="/assets/images/book-1.png" alt="" />
              <hr />
              <span>$18</span>
            </div>
          </div>
          <div>
            <span className="title">Quantity</span>
            <div className="book-box">
              <img src="/assets/images/book-2.png" alt="" />
              <hr />
              <span style={{ background: '#626262' }}>$15</span>
            </div>
          </div>
          <button>Checkout</button>
        </div>
        {/* ---------------------------main------------------------- */}
        <div className="center-store">
          <h1>Bookstore</h1>
          <div className="shop-basket">
            <img src="/assets/images/basket-image.png" alt="" />
          </div>
            <div>
            <span>Total:<strong>$</strong>98.9</span>
            <button >Checkout</button>
            </div>
         
        </div>
        {/* ----------------------right--------------------- */}
        <div className="right-store">
          <div className="top-right-store">
            <p>back</p>
            <p>lorem</p>
            <p>next</p>
          </div>
          <div>
            <hr />
            <span className="quantity">Quantity</span>
            <div className="book-box">
              <img src="/assets/images/book-3.png" alt="" />
              <hr />
              <span>$18</span>
            </div>
          </div>
          <div>
            <span className="title">Quantity</span>
            <div className="book-box">
              <img src="/assets/images/book-4.png" alt="" />
              <hr />
              <span style={{ background: '#626262' }}>$15</span>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookStore;
