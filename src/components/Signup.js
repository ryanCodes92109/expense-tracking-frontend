import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

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
    <div>
      <form 
        onSubmit={e => createUserSubmit(e,signupFormData)}
        className= 'signUpForm'>
        <label>First Name</label>
          <br/>
        <input 
          onChange={signupHandleChange} 
          name='first_name'
          value={signupFormData.first_name}
          placeholder='Enter first name here'></input>
          <br/>

        <label>Last Name</label>
          <br/>
        <input 
          onChange={signupHandleChange}
          name = 'last_name'
          value = {signupFormData.last_name}
          placeholder='Enter Last Name here'></input>
          <br/>

        <label>email</label>
          <br/>
        <input 
          onChange={signupHandleChange}
          name='email'
          value = {signupFormData.email}
          placeholder='Enter email address here'></input>
          <br/>
          <label>Password</label>
          <br/>
          <input 
          onChange={signupHandleChange}
          name='password'
          type='password'
          value={signupFormData.password}
          placeholder='Enter Password address here' />

        <button 
          type = 'submit'
          >Create an Account</button>
      
          <Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Have an account? Sign in here. </Link>
      </form>
      
    </div>
  )
}

export default Signup
