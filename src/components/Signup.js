import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import TextField from '@mui/material/TextField';




const Signup = ({setToggleAuth}) => {
  const navigate = useNavigate()
  
  const {setUser} =useContext(UserContext)
  const [signupFormData,setSignupFormData] = useState({
    first_name: '',
    last_name: '' ,
    email: '',
    password: ''
  })

  const signupHandleChange = ({target: {name, value}}) => {
    setSignupFormData(currentUser => (
      { ...currentUser, [name]: value }
      ))
    console.log('typing')
  }

  const createUserSubmit = (e, signupFormData) => {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupFormData),
    })
    .then(res => {
      if (res.status===201){

      res.json()

    .then(newUserObj => {
      setUser(newUserObj)
      navigate('/transactions')
          }
        )
      }
    }
  )
    // .then(userObj => setUser(userObj))
   }


  return (

    <div className='credentialContainer'>

      <form 
        onSubmit={e => createUserSubmit(e,signupFormData)}
        className= 'signUpForm'>
        {/* <label>First Name</label> */}
          {/* <br/> */}
        <TextField 
          className='credentialInput'
          onChange={signupHandleChange} 
          name='first_name'
          value={signupFormData.first_name}
          label='First Name'
        />
          {/* <br/> */}

        {/* <label>Last Name</label> */}
          {/* <br/> */}
        <TextField 
          className='credentialInput'
          onChange={signupHandleChange}
          name = 'last_name'
          value = {signupFormData.last_name}
          label='Last Name'
        />
          {/* <br/> */}

        {/* <label>Email</label> */}
          {/* <br/> */}
        <TextField 
          className='credentialInput'
          onChange={signupHandleChange}
          name='email'
          value = {signupFormData.email}
          label=' Email'
        />
          {/* <br/> */}
          {/* <label>Password</label> */}
          <TextField 
          className='credentialInput'
          onChange={signupHandleChange}
          name='password'
          type='password'
          value={signupFormData.password}
          label='Password' />
          {/* <br/> */}

        <button 
          type = 'submit'
          >Create an Account</button>

          <br/>
          <Link 
            className='toggleSignInLink'
            onClick={() => setToggleAuth(currentVal => !currentVal)}>Have an account? Sign in here. </Link>
      </form>

    </div>
  )
}

export default Signup
