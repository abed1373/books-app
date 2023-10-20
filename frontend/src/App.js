import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import './index.css'
import ProfileScreen from "./screens/ProfileScreen";
import BookStore from "./screens/BookStore";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<HomeScreen/>}/>
      <Route  path="/profile" element={<ProfileScreen/>}/>
      <Route  path="/store" element={<BookStore/>}/>
      <Route path="/signin" element={<SigninScreen/>}/>
      <Route path="/signup" element={<SignupScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
