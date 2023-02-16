import {UserContext} from 'react'
import { useContext, useState } from 'react'
import AssetCard from './AssetCard'
import AddAssetForm from './AddAssetForm'


const Assets = ({assets, user}) => {
  // const {user} = useContext(UserContext)
  
  
  const mappedAssets = assets.map(asset => 
  <AssetCard 
    key={asset.id}
    investment= {asset.investment_name}
    amount={asset.investment_amount}
    user = {asset.user_id}
  />)
  

  if(!user) {
    return <h1>Loading</h1>
  }
  return (
    <div className='listOfInvestments'>
      <AddAssetForm assets={assets}/>
      {mappedAssets}
   
    </div>
  )
}

export default Assets
