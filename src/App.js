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



function App() {
  const {user} = useContext(UserContext)
  const [transactionData, setTransactionData] = useState([])
  const [assets, setAssets] = useState([])

  // console.log(transactionData)

  // useEffect(() => {
  //   fetch('/all-assets')
  //   .then(res => res.json())
  //   // .then(setAssets)
  // }, [])
  // console.log(assets)

    // useEffect(() => {
    //   const fetchData = () => {
    //     fetch('/transactions')
    //     .then(res => res.json())
    //     .then(setTransactionData)
    //   }
    //   fetchData()
    // },[])

    const [toggleAuth, setToggleAuth] = useState(false)

      if (!user) {
        return (
          toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup  setToggleAuth={setToggleAuth}/>
        )
      }

    // const addTransaction = newTransaction => {
    //   setTransactionData(current => [...current, newTransaction])
    // }
   
  return (
    <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={
              <Home />
              }>
            </Route>
            <Route path='/transactions' element={ 
              <Transactions 
              transactionData={user.transactions}
                />
              }>
            </Route>  
              
              <Route path='/assets' element={
                
                <Assets 
                debugger
                  assets={user.assets} 
                  />}>
              </Route >
        </Routes>
    </div>
  );
}

export default App;
