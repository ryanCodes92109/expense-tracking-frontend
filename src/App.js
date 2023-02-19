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

              <Route path='/logout' element={
                <Signup />
              }/>

            
              
        </Routes>
    </div>
  );
}

export default App;


// import './App.css';
// import NavBar from './components/NavBar';
// import Transactions from './components/Transactions';
// import {useContext, useEffect, useState} from 'react'
// import Assets from './components/Assets';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import { UserContext } from './context/UserContext';

// function App() {
//   const {user} = useContext(UserContext)
//   const [transactionData, setTransactionData] = useState([])
//   const [assets, setAssets] = useState([])
// // console.log(transactionData)
//     // useEffect(() => {
//     //   const fetchData = () => {
//     //     fetch('/transactions')
//     //     .then(res => res.json())
//     //     .then(setTransactionData)
//     //   }
//     //   fetchData()
//     // },[])

//     // useEffect(() => {
//     //   fetch('http://127.0.0.1:4000/assets')
//     //   .then(res => res.json())
//     //   .then(setAssets)
//     // }, [])

//   return (
//     <div className="App">
//       <NavBar transactionData={transactionData}/>
//         <Routes>
//           <Route path='/' element={<Home />}>
//           </Route>
//           <Route path='/transactions' element={ 
//             <Transactions 
//               transactionData= {user}
//               key = {transactionData.id} 
//               vendor_name={transactionData.vendor_name} 
//               amount_spent={transactionData.amount_spent} 
//               user_id={transactionData.user_id} 
//             />}>
//           </Route>
//             <Route path='/all-assets' element={
//               <Assets 
//                 assets={assets} 
//                 />}>

//             </Route>
            
//       </Routes>
//     </div>
//   );
// }

// export default App;
