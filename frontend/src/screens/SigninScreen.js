import  {  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';


const SigninScreen = () => {

  const navigate=useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {search}=useLocation();
  const redirectInUrl=new URLSearchParams(search).get('redirect');
  const redirect=redirectInUrl?redirectInUrl:'/'

  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  
  const dispatch=useDispatch();
 

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
    if(!userInfo){
       alert('email or password is wrong')
    }else{
      navigate('/')
    }
  };

 
 

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
            <h1>Sign In</h1>
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
            <label />
            <button type="submit">Sign In</button>
          </div>
          <div>
          New Customer? <Link  to={`/register?redirect=${redirect}`}>Sign Up</Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SigninScreen
