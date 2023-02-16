import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {
  const {handleLogout} =useContext(UserContext)
  
  return (
    <>        
        <div className='navContainer'>
        <p className='appTitle'>ENTER NAME O' APP</p>
        <ul className='navBar'>
          <Link to='/'>
            <li className='navButton'>Home</li>
          </Link>

          {/* ternary showing assets and transactions if user logged in */}
          <Link to='/transactions'>
            <li className='navButton'>Transactions</li>
          </Link>
          <Link to='/assets'>
            <li className='navButton'>Assets</li>
          </Link>
          <Link to='/logout'>
          <button 
            className='navButton'
            onClick={handleLogout}
            >Log Out</button>
          </Link>
     
        </ul>
        </div>
    </>
  )
}

export default NavBar
