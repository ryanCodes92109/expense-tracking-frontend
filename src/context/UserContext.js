import React, {createContext, useState, useEffect} from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    

  const [selectionModel,setSelectionModel] = useState()

useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
        if (res.ok) {
            res.json()
            .then((user) => {
                setUser(user);
            });
        } else {
            res.json()
            .then((errorObj) => alert(errorObj.errors))
        }
    })
}, []);


       const [loginFormData,setLoginFormData] = useState({
        first_name: '',
        last_name: '' ,
        email: '',
        password: ''
      })

       const handleChange = ({target: {name, value}}) => {
        setLoginFormData(currentUser => ({
          ...currentUser, [name]: value
        }))
        console.log('typing')
      }

      const handleLogout = e => {
        console.log('clicking')
        fetch('/logout', {
            method:'DELETE'
        })
        .then(res => {
            if(res.status === 204) {
              setUser(null)
              console.log(res)
            } else {
              res.json()

              .then(error => alert(error))

            }
        })
      }
      
      const [transactionData, setTransactionData] = useState([])

      const addTransaction = newTransaction => {
        setTransactionData(current => [newTransaction,...current ])
      }
      
      
  return (
    <div>
        <UserContext.Provider value=
        {   {
            user, 
            setUser, 
            handleChange,
            loginFormData,
            setLoginFormData,
            handleLogout, 
       
            selectionModel,
            setSelectionModel, 
            addTransaction,
            setTransactionData
            }
        }>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export { UserContext, UserProvider }
