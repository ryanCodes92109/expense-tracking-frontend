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
