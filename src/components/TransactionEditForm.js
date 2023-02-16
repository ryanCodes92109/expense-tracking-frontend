import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'


const TransactionEditForm = ({transactionData, addTransaction}) => {
  
  const initialFormValues ={
    vendor_name: '',
    amount_spent: ''
  }
  const [formData, setFormData] = useState(initialFormValues)

const handleChange = (e) => {
  const {name, value} = e.target
  setFormData({...formData, [name]: value})
}

const handleSubmit = e => {
  e.preventDefault()
  fetch('/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData) 
  })
  .then(res => {
    if (res.status !== 201) {
      res.json()
      .then(errorObj => console.log(errorObj.error))
    } else {
      res.json()
      .then(t => addTransaction(t))
    }

  })
  
}
    
  return (

    <div>
      {<form 
        className='transactionPatchForm' 
        onSubmit={handleSubmit}>
        <label>Add New Transaction</label>
            <br/>

          <div className = 'addTransactionFormInput'>
            <label>Place of Purchase</label>
              <br/>
            <input 
              type='text'
              placeholder='Store Name'
              name='vendor_name'
              value={formData.vendor_name}
              onChange={handleChange}
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
              value={formData.amount_spent}
              onChange={handleChange}
              ></input>
            <br/>
          </div>
        <button type='submit' >Submit Change</button>
      </form>}
    </div>
  )
}

export default TransactionEditForm
