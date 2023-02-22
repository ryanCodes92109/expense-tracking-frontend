import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'

const AddAssetForm = ({assets}) => {

    const {user, setUser} =useContext(UserContext)
    const initialAssetFormValues =
    {
        investment_name: '',
        investment_amount: '',
        transaction_id: ''
      }
      // console.log(initialAssetFormValues)


    const [formAssetData, setFormAssetData] = useState(initialAssetFormValues)

    const addAsset = newAsset => {
        setUser(currentUser => ({...currentUser, created_assets: [...currentUser.created_assets, newAsset]}) )
      }

  const handleAssetChange = (e) => {
    const {name, value} = e.target
    setFormAssetData({ ...formAssetData, [name]: value })
  }
  
  const handleAssetSubmit = e => {
    e.preventDefault()

    fetch('/assets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formAssetData) 
    })
    .then(res => {
      if (res.status !== 201) {
        res.json()
        .then(errorObj => console.log(errorObj.error))
      } else {
        res.json()
        .then(addAsset)
      }
      
    })
    
  }

const userTransactions = user.transactions
const mappedTransactions = userTransactions.map(transaction => (
  <option 
    key={transaction.id} 
    name={transaction.vendor_name} 
    value={transaction.id}
    >{transaction.vendor_name}</option>))
    console.log(mappedTransactions)


  return (
    <div className='addAssetsForm'>
      <form 
        className='AssetPostForm' 

        onSubmit={handleAssetSubmit}>

      <div className = 'addAssetFormInput'>

            <input 
              className='postInput'
              type='text'
              placeholder='Enter Name of Investment'
              name='investment_name'
              value={assets.investment_name}
              onChange={handleAssetChange}
              />
          </div>

          <div className = 'addAssetFormInput'>
            <input 
              className='postInput'
              type='decimal'
              placeholder='Enter Amount of Investment'
              name='investment_amount'
              value={assets.investment_amount}
              onChange={handleAssetChange}
              />
          </div>

          <div className = 'addAssetFormInput'>
            <select 
              className='postInput'
              type='text'
              placeholder='Enter Linked Transaction'
              name='investment_amount'
              value={assets.asset_id}
              onChange={handleAssetChange}
              >
                {/* {mappedAssets} */}
                {mappedTransactions}
              </select>
          </div>
      
        <button 
          className='submitButton'
          type='submit' >Add Investment</button>
      </form>

    </div>
  )
}

export default AddAssetForm
