import { Link } from "react-router-dom"
import Footer from "../components/Footer"


const SigninScreen = () => {
  return (
    <div>
      <div>
        <Link className="back-link" to='/'>Back To Home</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default SigninScreen
