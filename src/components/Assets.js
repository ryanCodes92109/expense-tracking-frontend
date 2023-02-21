import {UserContext} from 'react'
import { useContext, useState } from 'react'
import AssetCard from './AssetCard'
import AddAssetForm from './AddAssetForm'


const Assets = ({assets, user, created_assets}) => {

  const mappedAssets = assets.map(asset => 
  <AssetCard 
    key={asset.id}
    investment= {asset.investment_name}
    amount={asset.investment_amount}
    user = {asset.user_id}
  />)

  const createdAssets= created_assets.map(manuallyCreatedAsset => {
    return <AssetCard 
    key={manuallyCreatedAsset.id}
    investment= {manuallyCreatedAsset.investment_name}
    amount={manuallyCreatedAsset.investment_amount}
    user = {manuallyCreatedAsset.user_id}
    />
  })
 console.log(createdAssets)

  if(!user) {
    return <h1>Loading</h1>
  }
  return (
    <div className='listOfInvestments'>
      <AddAssetForm assets={assets}/>
      <div className='assetContainer'>
        {createdAssets}
        {mappedAssets}
      </div>
   
    </div>
  )
}

export default Assets
