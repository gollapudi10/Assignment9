import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
const services = require('../Services/services')

export const Login = () => {
  const [errors, setErrors] = useState(null);
  const [isLoginValid, setIsLoginValid] = useState(null);
  const [user, setUser ] = useState(null);



  const LoginError = (props) => {
    return (
      <div className='loginerror'>{props.error}</div>
    )
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setErrors("Email/Password cannot be empty, try again")
      setIsLoginValid(true)
    } else {
      try {
        console.log("Trying to login")
        const user = await services.login(email, password)
       
        setIsLoginValid(false)
        if (!sessionStorage.getItem("user")) {
          sessionStorage.setItem("user", JSON.stringify(user))
        }
        setUser(user);
      } catch (e) {
        // console.log(e)
        setErrors(e)
        setIsLoginValid(true)
      }
    }
  }



  return (
    <Card title="Login">
      {user && <Navigate to="/home" />}
      <form onSubmit={loginUser}>
        {isLoginValid && <LoginError error={errors}/>}
        <input type="text" id='email' name='email' placeholder='Email Id' />
        <input type="password" id='password' name='password' placeholder='Password' />
        <button className='loginbtn' type="submit" value="Login">Login</button>
      </form>
    </Card>
  )
}