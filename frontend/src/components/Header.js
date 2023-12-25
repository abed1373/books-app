import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
            <Link className="link" to="/profile">
              User Profile
            </Link>
          </div>
          <div>
            <Link className="link" to="/store">
              Book Store
            </Link>
          </div>
          <div>
            <Link style={{textDecoration:'none',color:'white'}} to='/cart'>Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            ) }
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <div>
            <Link className="link" to="/signup">
            Sign Up
            </Link>
          </div>
          <div>
            {userInfo ? (
              <div className="userinfo-dropdown">
                <Link className="link" to="#">
                  {userInfo.username}{' '}
                  <i className="fa-sharp fa-solid fa-caret-down"></i>{' '}
                </Link>
                <ul className="userinfo-dropdown-content">
                  <li>
                    <Link className="link" to="/profile">
                      User Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={logoutHandler} className="link" to="/">
                      signout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="link" to="/signin">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
