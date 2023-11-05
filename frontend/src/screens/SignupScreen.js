import  { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/userActions';


const SignupScreen = () => {

  const navigate=useNavigate()
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userRegister=useSelector(state=>state.userRegister);
  const {userInfo,error,loading}=userRegister;
  console.log(userInfo)
  const dispatch=useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
if(password !== confirmPassword){
  alert('Password and confirmPassword not match')
}else{
  dispatch(register(username,email,password))
}
  };

  useEffect(()=>{
if(userInfo){
  navigate('/')
}
  },[navigate, userInfo])

  return (
    <div>
      <div className="sign-container">
        <div>
          <Link className="back-link" to="/">
            Back To Home
          </Link>
        </div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Create Account</h1>
          </div>
          <div>
            <label htmlFor="name">userName</label>
            <input
            value={username}
              type="text"
              id="name"
              placeholder="Enter name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
            value={email}
              type="email"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
            value={password}
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            value={confirmPassword}
              type="password"
              id="confirmPassword"
              placeholder="Enter confirm password"
              required
              onChange={e=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label />
            <button type="submit">Sign Up</button>
          </div>
          <div>
            Already have a account? <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignupScreen
