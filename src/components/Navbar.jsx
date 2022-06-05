import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
   
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/user'>User</Link>
       
    </div>
  )
}

export default Navbar