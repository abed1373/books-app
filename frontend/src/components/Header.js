import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <div className="home-link">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="search-box">
            <img src="/assets/images/search.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-center">
          <div>
            <Link className='link' to="/profile">User Profile</Link>
          </div>
          <div>
            <Link className='link' to='/store'>Book Store</Link>
          </div>
        </div>
        <div className="nav-right">
            <div>
                <Link className='link' to='signup'>Sign Up</Link>
            </div>
            <div>
                <Link className='link' to='signin'>Sign In</Link>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
