import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav__bar'>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/list'>List</Link>
        </ul>
    </div>
  )
}

export default NavBar