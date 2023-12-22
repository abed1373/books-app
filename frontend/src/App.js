import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './index.css';
import ProfileScreen from './screens/ProfileScreen';
import BookStore from './screens/BookStore';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import PrivateRoute from './components/privateRoute';
import ProductDetail from './screens/ProductDetail';
import CartScreen from './screens/cartScreen';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/:bookId" element={<ProductDetail />} />
          <Route path="/cart/:bookId?" element={<CartScreen/>} />

          <Route path="/store" element={<BookStore />} />
        </Route>

        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
