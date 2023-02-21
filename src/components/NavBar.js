import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Account from './Account'
import moneySymbol from './moneySymbol.png'

const NavBar = () => {
  const {handleLogout} = useContext(UserContext)
  
  return (
    <>        
        <div className='navContainer'>
        <img className="money-icon" src={moneySymbol} alt="logo"/>

        <p className='appTitle'>WHERE MA' MONEY</p>
        <ul className='navBar'>

          <Link to='/transactions'>
            <li className='navButton'>Transactions</li>
          </Link>
          <Link to='/assets'>
            <li className='navButton'>Investments</li>
          </Link>

          <Link to='/'>
            <div className ='navButtonParent'>
              <li className='navButton'>Account</li>
            </div>
          </Link>

          <Link to='/logout'>
            <li onClick={handleLogout} className='navButton'>Log Out</li>
          </Link>
     
        </ul>
        </div>
    </>
  )
}

export default NavBar
