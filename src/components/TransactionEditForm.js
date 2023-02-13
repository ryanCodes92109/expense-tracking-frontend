import React, {useState} from 'react'
import { useParams} from 'react-router-dom'
import { Form } from 'react-router-dom'


const TransactionEditForm = ({setTransactionData,  vendor_name, amount_spent, id, transactionData}) => {

  const initialFormValues = {
    id: '',
    vendor_name: '',
    amount_spent: ''
  }
  const [formData, setFormData] = useState(initialFormValues)
    
const handleChange = ({target: {name, value}}) => {
  // const { name, value } = e.target
  setFormData({...formData, [name]: value })
}

const handleSubmit = e => {
  e.preventDefault()
  fetch('http://localhost:4000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(res => {
      if (res.status !==201) {
        res.json()
        .then(messageObj => messageObj.message) 
      } else {
        setFormData(initialFormValues)
      }
    })
}
    
  return (

    <div>
      <form 
        className='transactionPatchForm' 
        onSubmit={handleSubmit}>
        <label>Edit Transaction</label>
            <br/>

          <div className = 'patchFormInput'>
            <label>Transaction</label>
            <input 
              type='text'
              placeholder='Transaction ID'
              name={id}
              value={transactionData.id}
              onChange={handleChange}
              ></input>
              <br/>
          </div>

          <div className = 'patchFormInput'>
            <label>Place of Purchase</label>
              <br/>
            <input 
              type='text'
              placeholder='Place of Purchase'
              name={vendor_name}
              value={transactionData.name}
              onChange={handleChange}
              ></input>
              <br/>
          </div>

          <div className = 'patchFormInput'>
            <label>Amount Spent</label>
            <input 
              type='text'
              placeholder='Amount Spent'
              name={amount_spent}
              value= {transactionData.amount_spent}
              onChange={handleChange}
              ></input>
            <br/>
          </div>
        <button type='submit' >Submit Change</button>
      </form>
    </div>
  )
}

export default TransactionEditForm
