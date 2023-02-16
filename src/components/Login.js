import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Home = ({setToggleAuth}) => {
  // console.log(user)
  const { 
    loginSubmit, 
    handleChange,
    loginFormData,
    setLoginFormData
        } = useContext(UserContext)
  


  // const showSignIn = e => {
  //   setToggleSignIn(currentValue => !currentValue)
  // }

  // const loginSubmit = e => {
  //   e.preventDefault()
  //   fetch('/login', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //   .then(res => res.json())
  //   .then(userLoggedIn => setUser(userLoggedIn))
    
  //   console.log('submitting')
  // }

  // const createUserSubmit = e => {
  //   const user = {
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //     password: ''
  //   }
  //   e.preventDefault()
  //   fetch('/signup', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //   .then(res => res.json())
  //   .then(user => setUser(user))
  //  }

  // const handleChange = ({target: {name, value}}) => {
  //   setFormData(currentUser => ({
  //     ...currentUser, [name]: value
  //   }))
  //   console.log('typing')
  // }

  return (
    <div className='credentialContainer'>
      
      <form 
        onSubmit={(e) => loginSubmit(e, loginFormData)}
        className = 'signinForm'>
        <label>Email</label>
          <br/>
        <input 
          onChange={handleChange}
          name='email'
          value={loginFormData.email}
          placeholder='Enter Username here'></input>
          <br/>

        <label>Password</label>
          <br/>
        <input 
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Enter Password here'
          value={loginFormData.password}
          ></input>
          
          <br/>
        <button 
          type='submit'
          >Sign In</button>
          <br/>
          <br/>
          <Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Don't have an account? Sign up here.</Link>
      </form>
   
      </div>
    

  )
}

export default Home
