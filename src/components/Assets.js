import {UserContext} from 'react'
import { useContext } from 'react'
import AssetCard from './AssetCard'


const Assets = () => {
  // const {user, selectionModel, setSelectionModel} = useContext(UserContext)
  
  const {user} = useContext(UserContext)
  const mappedAssets = user.map(asset => 
  <AssetCard 
    key={asset.assets.id}
    investment= {asset.assets.investment_name}
    amount={asset.assets.investment_amount}
    user = {asset.assets.user_id}
  />)

  if(!user) {
    return <h1>Loading</h1>
  }
  return (
    <div className='listOfInvestments'>
      {mappedAssets}
   
    </div>
  )
}

export default Assets
