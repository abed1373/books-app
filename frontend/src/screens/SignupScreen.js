import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const SignupScreen = () => {
  return (
    <div>
      <div>
        <Link className="back-link" to='/'>Back To Home</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default SignupScreen
