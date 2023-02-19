import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'

const AddAssetForm = ({assets}) => {
    // console.log(assets)
    const [toggleAddAssetForm, setToggleAddAssetForm] = useState(true)
    const {setUser} =useContext(UserContext)
    const initialAssetFormValues = {
        investment_name: '',
        investment_amount: ''
      }

    const [formAssetData, setFormAssetData] = useState(initialAssetFormValues)

    const addAsset = newAsset => {
        setUser(currentUser => ({...currentUser, created_assets: [...currentUser.created_assets, newAsset]}) )
      }

  const toggleNewAssetForm = e => {
    console.log('click')
    setToggleAddAssetForm(currentValue => !currentValue)
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
    

  return (
    <div className='addAssetsForm'>
      <form 
        className='AssetPostForm' 
        onSubmit={handleAssetSubmit}
      >
            <input 
            className='assetInput'
              type='text'
              placeholder='Name of Investment'
              name='investment_name'
              value={formAssetData.investment_name}
              onChange={handleAssetChange}
              ></input>
              <br/>

            <input 
            className='assetInput'
              type='decimal'
              placeholder='Amount Invested'
              name='investment_amount'
              value={formAssetData.investment_amount}
              onChange={handleAssetChange}
              ></input>
            <br/>

        <button 
          className='addAssetBtn' 
          type='submit' >Add New Investment</button>
        
      </form>

      {/* <button 
          className='addAssetBtn'
          onClick = {toggleNewAssetForm}
          type='text'>Hide </button> */}
    </div>
  )
}

export default AddAssetForm
