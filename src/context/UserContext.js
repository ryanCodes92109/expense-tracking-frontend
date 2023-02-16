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
  console.log(user)

    //fetch for login and create and logout
    
    const loginSubmit = (e,loginFormData) => {
        e.preventDefault()
        fetch('/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginFormData),
        })
        .then(res => res.json())
        .then(userObj => setUser(userObj))
        
    
        console.log('submitting')
      }
    
      const createUserSubmit = (e, signupFormData) => {
        e.preventDefault()
        fetch('/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupFormData),
        })
        .then(res => res.json())
        .then(setUser)
        // .then(userObj => setUser(userObj))
       }

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
            } else {
              res.json()
              .then(error => console.log(error))
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
            loginSubmit, 
            createUserSubmit,
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
