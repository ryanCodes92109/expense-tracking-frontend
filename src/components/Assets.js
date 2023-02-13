import React from 'react'
import AssetCard from './AssetCard'

const Assets = ({assets}) => {
  console.log(assets)

  const mappedAssets = assets.map(asset => 
  <AssetCard 
    key={asset.id}
    investment= {asset.investment_name}
    amount={asset.investment_amount}
    user = {asset.user_id}
  />)
  return (
    <div className='listOfInvestments'>
      {mappedAssets}
    </div>
  )
}

export default Assets
