import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'


const TransactionEditForm = () => {
  const {setUser} = useContext(UserContext)
  const [showNewTransactionForm, setShowNewTransactionForm] = useState(true)

  const toggleNewTransactionForm = e => {
    setShowNewTransactionForm(currentValue => !currentValue)
  }
  
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

    <>
      
      <form 
        className='transactionPatchForm' 
        onSubmit={handleTransactionSubmit}>
        {/* <label className= 'addNewTransactionLabel'>Add New Transaction</label>
            <br/> */}

          <div className = 'addTransactionFormInput'>
         
            <input 
              className='newTransactionInput'
              type='text'
              placeholder='Enter New Transaction Here'
              name='vendor_name'
              value={formTransactionData.vendor_name}
              onChange={handleTransactionChange}
              ></input>
          </div>

          <div className = 'addTransactionFormInput'>
            <input 
              className='newTransactionInput'
              type='text'
              placeholder='Amount Spent'
              name='amount_spent'
              value={formTransactionData.amount_spent}
              onChange={handleTransactionChange}
              ></input>
          </div>
       
        <button className = 'newTransactionButton' type='submit' >Add Transaction</button>
      </form> 

    </>
  )
}

export default TransactionEditForm
