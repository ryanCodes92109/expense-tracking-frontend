import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TransactionEditForm from './TransactionEditForm';

const Transactions = ({transactionData, addTransaction}) => {
  const [selectionModel,setSelectionModel] = useState()

    const columns = [
    {field:"id", headerName:'Id'},
    {field:"vendor_name", headerName:'Place of Purchase', width:300},
    {field:"amount_spent", headerName:'Cost', width:300}    
    ]

    


  return (
    <div className='transactionsContainer'>
        <TransactionEditForm 
          transactionData={transactionData}
          addTransaction={addTransaction}
        />
        <div className='transactions'>
          <label className='transactionLabel'>Transactions</label>
         

            <DataGrid
            checkboxSelection
            columns={columns}
            rows={transactionData}
            onSelectionModelChange = {(newSelectionModel) => {
              setSelectionModel(newSelectionModel)
            }}
            />




        </div>
    </div>
  )
}

export default Transactions
