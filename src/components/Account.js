import Login from "./Login"
import Signup from "./Signup"
import Transactions from "./Transactions"
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const Account = () => {
const {user} = useContext(UserContext)
  const [toggleAuth, setToggleAuth] = useState(false)

  if (!user) {
    return (
      toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>
    )
  }

  return (
    <div>
        <Transactions />
    </div>
  )
}
  
export default Account;

