import React, {useState, useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { DataGrid } from '@mui/x-data-grid';
import TransactionEditForm from './TransactionEditForm';

const Transactions = ({transactionData, addTransaction, selectionModel,setSelectionModel}) => {
  const {user} = useContext(UserContext)
  
    const columns = [
    {field:"id", headerName:'Id', editable: true},
    {field:"vendor_name", headerName:'Place of Purchase',editable: true, width:300},
    {field:"amount_spent", headerName:'Cost',editable: true, width:300}    
    ]
    if(!user) {
      return <h1>Loading</h1>
    }
  return (
    <div className='transactionsContainer'>
        <TransactionEditForm 
          transactionData={user.transactions}
          addTransaction={addTransaction}
        />
        <div className='transactions'>
          <label className='transactionLabel'>Transactions</label>

        <DataGrid
          checkboxSelection
          columns={columns}
          rows={user.transactions}
          onSelectionModelChange = {(selectionModel) => {
            setSelectionModel(selectionModel)
            }}
            />

        </div>
    </div>
  )
}

export default Transactions
