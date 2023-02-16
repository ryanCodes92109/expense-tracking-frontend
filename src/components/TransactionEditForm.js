import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'


const TransactionEditForm = ({transactionData, setTransactionData}) => {
  const {setUser} = useContext(UserContext)
  
  const initialTransactionFormValues ={
    vendor_name: '',
    amount_spent: ''
  }
  const [formTransactionData, setFormTransactionData] = useState(initialTransactionFormValues)

  

const handleTransactionChange = (e) => {
  const {name, value} = e.target
  setFormTransactionData({ ...formTransactionData,[name]: value })
}
const addTransaction = newTransaction => {
  setUser(currentUser => ({...currentUser, transactions: [...currentUser.transactions, newTransaction]}) )
}
// const addAsset = newAsset => {
//   setUser(currentUser => ({...currentUser, created_assets: [...currentUser.created_assets, newAsset]}) )
// }
const handleTransactionSubmit = e => {
  e.preventDefault()
  fetch('/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formTransactionData) 
  })
  .then(res => {
    if (res.status !== 201) {
      res.json()
      .then(errorObj => console.log(errorObj.error))
    } else {
      res.json()
      .then(addTransaction)

      // .then(t => addTransaction(t))
    }

  })
  
}
    
  return (

    <div>
      {<form 
        className='transactionPatchForm' 
        onSubmit={handleTransactionSubmit}>
        <label>Add New Transaction</label>
            <br/>

          <div className = 'addTransactionFormInput'>
            <label>Place of Purchase</label>
              <br/>
            <input 
              type='text'
              placeholder='Store Name'
              name='vendor_name'
              value={formTransactionData.vendor_name}
              onChange={handleTransactionChange}
              ></input>
              <br/>
          </div>

          <div className = 'addTransactionFormInput'>
            <label>Amount Spent</label>
            <br/>
            <input 
              type='text'
              placeholder='Enter Cost'
              name='amount_spent'
              value={formTransactionData.amount_spent}
              onChange={handleTransactionChange}
              ></input>
            <br/>
          </div>
        <button type='submit' >Submit Change</button>
      </form>}
    </div>
  )
}

export default TransactionEditForm
