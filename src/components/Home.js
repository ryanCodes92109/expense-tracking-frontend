import React, {useState} from 'react'


const Home = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true)



  
  const showSignIn = e => {
    setToggleSignIn(currentValue => !currentValue)
  }


  return (
    <div className='credentialContainer'>
      

      {toggleSignIn  ?  (
      <div>
      <form 
        className = 'signinForm'>
        <label>Email</label>
          <br/>
        <input 
          name='email'
          placeholder='Enter Username here'></input>
          <br/>

        <label>Password</label>
          <br/>
        <input 
          placeholder='Enter Password here'></input>
          <br/>
        <button 
          type='submit'>Sign In</button>
          <br/>
        <span>Or</span>
          <br/>
      </form>
      <button 
      onClick={showSignIn}>Create an Account</button>
      </div>
      ) : (
      <div>
      <form 
        className= 'signUpForm'>
        <label>First Name</label>
          <br/>
        <input 
          name='first_name'
          // value={first_name}
          placeholder='Enter first name here'></input>
          <br/>

        <label>Last Name</label>
          <br/>
        <input 
          name = 'last_name'
          placeholder='Enter Last Name here'></input>
          <br/>

        <label>email</label>
          <br/>
        <input 
          name='email'
          placeholder='Enter email address here'></input>
          <br/>

        <button 
          type = 'submit'>Create an Account</button>
          <br/>
        <span>Or</span>
          <br/>
    
          <br/>
        
      </form>
      <button 
          onClick={showSignIn} 
          >Sign In</button>
      </div>
      )


      }
    </div>
  )
}

export default Home
