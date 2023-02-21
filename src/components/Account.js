import Login from "./Login"
import Signup from "./Signup"
import Transactions from "./Transactions"
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import Assets from "./Assets";
import { Link, useNavigate } from "react-router-dom";

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
      // .then(userObj => setUser(userObj))
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
      toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>
    )
  }
  return (
    
      <div className ='userInfoBox'>
      <span className='accountInfo'>{`${user.first_name} ${user.last_name}`}</span>
        <br/>
      <span className='accountInfo'>{`${user.email}`} </span>
     
        
        <form onSubmit={userPatch}>
          <input
            className='accountInfoPatch'
            onChange={patchHandleChange}
            name="first_name"
            value={patchFormValues.first_name}
            placeholder="First Name"></input>
            <br/>
            <input
            className='accountInfoPatch'
            onChange={patchHandleChange}
              name="last_name"
              value={patchFormValues.last_name}
              placeholder="Last Name"></input>
            <br/>
            <input
            className='accountInfoPatch'
            onChange={patchHandleChange}
              name="email"
              value={patchFormValues.email}
              placeholder="email"></input>
            <br/>
            <button 
            className='accountInfoPatch'
              type="submit"
              >Change Your Information</button>
              <button 
        className='accountInfoPatch'
          onClick={userDelete}>Delete Account</button>

        </form>
            
      </div>
 
  )
}
  
export default Account;

