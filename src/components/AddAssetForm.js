import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'

const AddAssetForm = ({assets}) => {
    // console.log(assets)
    const {setUser} =useContext(UserContext)
    const initialAssetFormValues =
    {
        investment_name: '',
        investment_amount: ''
      }

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
    

  return (
    <div className='addAssetsForm'>
      <form 
        className='AssetPostForm' 
        onSubmit={handleAssetSubmit}>

      <div className = 'addAssetFormInput'>

            <input 
              className='assetInput'
              type='text'
              placeholder='Name of Investment'
              name='investment_name'
              value={formAssetData.investment_name}
              onChange={handleAssetChange}
              ></input>
          </div>

          <div className = 'addAssetFormInput'>
            <input 
              className='assetInput'
              type='decimal'
              placeholder='Enter Cost'
              name='investment_amount'
              value={formAssetData.investment_amount}
              onChange={handleAssetChange}
              ></input>
          </div>
        <button 
          className='assetSubmitButton'
          type='submit' >Submit Change</button>
      </form>
    </div>
  )
}

export default AddAssetForm
