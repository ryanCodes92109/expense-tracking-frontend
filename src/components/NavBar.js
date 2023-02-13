import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>        
        
        <div className='navContainer'>
        <p className='appTitle'>WHERE MA MONEY</p>
        <ul className='navBar'>
          <Link to='/home'>
            <li className='navButton'>Home</li>
          </Link>
          <Link to='/transactions'>
            <li className='navButton'>Transactions</li>
          </Link>
          <Link to='/assets'>
            <li className='navButton'>Assets</li>
          </Link>
        </ul>
        </div>
    </>
  )
}

export default NavBar
