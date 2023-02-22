import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/UserContext';
import { DataGrid } from '@mui/x-data-grid';
import TransactionEditForm from './TransactionEditForm';

const Transactions = ({transactionData, setTransactionData}) => {

  const {user} = useContext(UserContext)
  // console.log(user.assets)
  
  const editTransaction = e => {
  
    fetch(`/transactions/${user.transactions.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(transactionData)
    })
  }

    const columns = [
    {field:"id", headerName:'Id', editable: true},

    {field: "asset_id", HeaderName:"Associated Asset", editable:true, width:300},
    {field:"vendor_name", headerName:'Place of Purchase',editable: true, width:300},
    {field:"amount_spent", headerName:'Amount',editable: true, width:300} 

    ]
    if(!user) {
      return <h1>Loading</h1>
    }

    // console.log(user.transactions)

  return (
    <div className='transactionsContainer'>
        <TransactionEditForm 
          transactionData={user.transactions}
          setTransactionData={setTransactionData}
        />
        <div className='transactions'>
          <label className='transactionLabel'>Transactions</label>


        <DataGrid
          className='transactionGrid'
          checkboxSelection
          columns={columns}
          rows={user.transactions}

            />

        </div>
    </div>
  )
}

export default Transactions
