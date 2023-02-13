import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TransactionEditForm from './TransactionEditForm';

const Transactions = ({transactionData}) => {

    const columns = [
    {field:"id", headerName:'Id'},
    {field:"vendor_name", headerName:'Place of Purchase', width:300},
    {field:"amount_spent", headerName:'Cost', width:300}    
    ]

    const [selectionModel,setSelectionModel] = useState()



  return (
    <div className='transactionsContainer'>
        <TransactionEditForm 
          transactionData={transactionData}
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
