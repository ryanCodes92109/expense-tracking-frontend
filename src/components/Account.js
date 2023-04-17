import Login from "./Login"
import Signup from "./Signup"
import Transactions from "./Transactions"
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import Assets from "./Assets";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const Account = () => {
// const navigate = useNavigate()

const {user, loginFormData, createUserSubmit, signupFormData, signupHandleChange, setUser, setSignupFormData} = useContext(UserContext)

  const [toggleAuth, setToggleAuth] = useState(false)

  const initialPatchFormValues = {
      first_name: "",
      last_name: "",
      email: ""
    }
  
  const [patchFormValues, setPatchFormValues] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });
  
    const userPatch = (e) => {
      e.preventDefault()
      console.log('submit')
     
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchFormValues),
      })
      .then(res => { 
        console.log(res.json())
      })
      .then(setUser(patchFormValues))
      setPatchFormValues(initialPatchFormValues)
     }

    const patchHandleChange = (e) => {
      const { name, value } = e.target;
      setPatchFormValues((previousFormValues) => ({ ...previousFormValues, [name]: value }));
    };
    
    const userDelete = e => {
      fetch(`users/${user.id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if(res.status === 204) {
          setUser(null)
         
         console.log(res)
        } else {

          alert(res)
        }
      })
    }
   
  if (!user) {
    return (
      toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>)
  }
  return (

    
      <div className ='userInfoBox'>
      <span className='accountInfo'>Name: {`${user.first_name} ${user.last_name}`}</span>
    
      <span className='accountInfo'>Email: {`${user.email}`} </span>
      <br/>

   

        <form 
          onSubmit={userPatch}
          className='accountPatchForm'
        >
          <TextField
            className='credentialInput'
            onChange={patchHandleChange}
            name="first_name"
            value={patchFormValues.first_name}
            label="First Name"
          />
      

            <TextField
              className='credentialInput'
              onChange={patchHandleChange}
              name="last_name"
              value={patchFormValues.last_name}
              label="Last Name"
            />
        

            <TextField
            className='credentialInput'
            onChange={patchHandleChange}
              name="email"
              value={patchFormValues.email}
              label="email"
            />

          <div className = 'accountPatchButtonContainer'>
 
            <button 
              className='accountPatchBtn'
              type="submit"
              >Update</button>

            <button 
              className='accountPatchBtn'
              onClick={userDelete}>Delete Account</button>

          </div>

        </form>
     
      </div>
 
  )
}
  
export default Account;

