import './App.css';
import NavBar from './components/NavBar';
import Transactions from './components/Transactions';
import {useEffect, useState} from 'react'
import Assets from './components/Assets';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [transactionData, setTransactionData] = useState([])
  const [assets, setAssets] = useState([])
  // console.log(transactionData)
    useEffect(() => {
      const fetchData = () => {
        fetch('http://127.0.0.1:4000/transactions')
        .then(res => res.json())
        .then(setTransactionData)
      }
      fetchData()
    },[])

    useEffect(() => {
      fetch('http://127.0.0.1:4000/assets')
      .then(res => res.json())
      .then(setAssets)
    }, [])

    const addTransaction = newTransaction => {
      setTransactionData(current => [...current, newTransaction])
    }

  return (
    <div className="App">
      <NavBar 
        transactionData={transactionData}/>
        <Routes>
          <Route path='/home' element={
            <Home 
              
            />}>
          </Route>
          <Route path='/transactions' element={ 
            <Transactions 
              addTransaction = {addTransaction}
              transactionData= {transactionData}
             
            />}>
          </Route>
            <Route path='/Assets' element={
              <Assets 
                assets={assets} 
                />}>

            </Route>
            
      </Routes>
    </div>
  );
}

export default App;
