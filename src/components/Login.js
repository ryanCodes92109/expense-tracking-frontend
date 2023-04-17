import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';

const Home = ({setToggleAuth}) => {
  const navigate = useNavigate()
   // console.log(user)
  const { 
    handleChange,
    loginFormData,
    setLoginFormData,
    setUser,
        } = useContext(UserContext)
  
        const loginSubmit = (e,loginFormData) => {
          e.preventDefault()
          fetch('/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginFormData),
          })
          .then(res => {
            if (res.status === 200) {
              
              res.json()
          
            .then(userObj => 
              {
                setUser(userObj)
                navigate('/transactions')
              }
            )

          } else {
            res.json()
            .then(error => alert("Login unsuccessful, check your email or password and try again."))
          }
        }
      )
 
          console.log('submitting')
        }


  return (
    <div className='credentialContainer'>
      
      <form 
        onSubmit={(e) => loginSubmit(e, loginFormData)}
        className = 'signinForm'>
          <br/>
        <TextField 
          onChange={handleChange}
          className='credentialInput'
          name='email'
          value={loginFormData.email}
          label='Email'
        />
          <br/>

         
        <TextField 
          className='credentialInput'
          onChange={handleChange}
          name='password'
          type='password'
          label='Password'
          value={loginFormData.password}
        />
          
          <br/>

        <button 
          className='signinButton'
          type='submit'>
            Sign In
          </button>

          <br/>
          <br/>


          <Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Don't have an account? Sign up here.</Link>


      </form>
   
      </div>
    

  )
}

export default Home
