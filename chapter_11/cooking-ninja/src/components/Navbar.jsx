import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1>Cooking Ninja</h1>
      </Link>
      <Link to='/create'>Create Recipe</Link>
    </div>
  )
}

export default Navbar
