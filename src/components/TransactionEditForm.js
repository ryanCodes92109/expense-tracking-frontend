import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'


const TransactionEditForm = () => {
  const {user, setUser} = useContext(UserContext)
  const [showNewTransactionForm, setShowNewTransactionForm] = useState(false)

  const toggleNewTransactionForm = e => {
    setShowNewTransactionForm(currentValue => !currentValue)
  }
  
  const initialTransactionFormValues = {
    vendor_name: '',
    amount_spent: '',
    asset_id: ''
  }

  const [formTransactionData, setFormTransactionData] = useState(initialTransactionFormValues)

const handleTransactionChange = (e) => {
  const {name, value} = e.target
  setFormTransactionData({ ...formTransactionData,[name]: value })
}

const addTransaction = newTransaction => {
  setUser(currentUser => ({...currentUser, transactions: [...currentUser.transactions, newTransaction]}) )
}

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

const userAssets = user.assets
console.log(userAssets)
const mappedAssets = userAssets.map(asset =>  (
  <option 
    key ={asset.id} 
    // name={asset.investment_name}
    value={asset.id}
    >{asset.investment_name}</option>
    )
)

console.log(mappedAssets)    


// const mappedTransactions = userTransactions.map(transaction => (
//   <option key={transaction.id} name={transaction.vendor_name} value={transaction.id}>{transaction.vendor_name}</option>))

  return (

    <>
      
      <form 
        className='transactionPatchForm' 
        onSubmit={handleTransactionSubmit}>

          <div className = 'addTransactionFormInput'>
         
            <input 
              className='postInput'
              type='text'
              placeholder='Enter Place of Purchase'
              name='vendor_name'
              value={user.vendor_name}
              onChange={handleTransactionChange}
              ></input>
          </div>

          <div className = 'addTransactionFormInput'>
            <input 
              className='postInput'
              type='text'
              placeholder='Enter Amount Spent'
              name='amount_spent'
              value={user.amount_spent}
              onChange={handleTransactionChange}
              ></input>
          </div>

          <select 
            className = 'addTransactionFormInput'
              name='asset_id'
              value={formTransactionData.asset_id}
              onChange={handleTransactionChange}
              >
            {mappedAssets}
          </select> 
       
        <button 
          className ='submitButton' 
          type='submit' 
          >Add Transaction</button>
      </form> 
    
    </>
  )
}

export default TransactionEditForm
