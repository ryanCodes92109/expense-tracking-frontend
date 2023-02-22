import React from 'react'

const AssetCard = ({ amount, investment, user}) => {

  return (
    
        <div className = 'investmentList'>
            <div className = 'investmentCard'>
                {/* <div className='userWhoInvested'>{user.asset_id}</div> <br/> */}
                <div className='investmentName'>Name: {investment}</div> <br/>
                <div className='investmentAmount'> Amount: ${amount}</div> <br/>
            </div>
        </div>

  )
}

export default AssetCard
