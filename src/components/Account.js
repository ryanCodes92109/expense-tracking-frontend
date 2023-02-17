import Login from "./Login"
import Signup from "./Signup"
import Transactions from "./Transactions"
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import Assets from "./Assets";
import { Link } from "react-router-dom";

const Account = () => {

const {user, loginFormData, createUserSubmit, signupFormData, signupHandleChange, setUser,setSignupFormData} = useContext(UserContext)

  const [toggleAuth, setToggleAuth] = useState(false)

  const [patchFormValues, setPatchFormValues] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });
  
    const userPatch = (e) => {
      e.preventDefault()
      console.log('submit')
      const newValue =  {
        first_name: e.target.value,
        last_name:e.target.value,
        email:e.target.value
      }
      console.log("submit")
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValue),
      })
      .then(res => res.json())
      .then(setUser(newValue))
      // .then(userObj => setUser(userObj))
     }

    //  const patchHandleChange = ({target: {name, value}}) => {
    //   setUser(currentUser => (
    //     { ...currentUser, [name]: value }
    //     ))
    //   console.log('typing')
    // }

    const patchHandleChange = (e) => {
      const { name, value } = e.target;
      setPatchFormValues((previousFormValues) => ({ ...previousFormValues, [name]: value }));
    };
    

    const userDelete = e => {
      fetch(`users/${user.id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if(!user) {
         setUser(null)
         
         console.log(res)
        } else {
          console.log(res)
        }
      })
    }
    console.log(user)
  if (!user) {
    return (
      toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>
    )
  }
  return (
    <div className ='userInfoBoxParent'>
      <div className ='userInfoBox'>
      {`${user.first_name} ${user.last_name}`}
        <br/>
      {`${user.email}`}
     
        <button 
        className='accountInfoPatch'
          onClick={userDelete}>Delete Account</button>
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

        </form>
            
      {/* <Transactions /> */}
      </div>
    </div>
  )
}
  
export default Account;

