import './App.css';
import NavBar from './components/NavBar';
import {useEffect, useState, useContext} from 'react'
import { UserContext } from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Assets from './components/Assets'
import Login from './components/Login'
import Signup from './components/Signup';
import Account from './components/Account';

function App() {
  const {user} = useContext(UserContext)
  const [transactionData, setTransactionData] = useState([])
  // const [assets, setAssets] = useState([])

    const [toggleAuth, setToggleAuth] = useState(false)

      if (!user) {
        return (
          toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>
        )
      }
      // console.log(user)
  return (
    <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={
              <Home 

              />
              }>
            </Route>
            <Route path='/transactions' element={ 
              <Transactions 
              transactionData={user.transactions}
              setTransactionData={setTransactionData}
                />
              }>
            </Route>  
              
              <Route path='/assets' element={
                <Assets 
                  assets={user.assets} 
                  created_assets = {user.created_assets}
                  user={user}
                  />}>
              </Route >

              <Route path='/login' element={
                <Login setToggleAuth={setToggleAuth}/>
              }> 

              </Route>
              
        </Routes>
    </div>
  );
}

export default App;
