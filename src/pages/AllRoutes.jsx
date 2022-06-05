import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Login from './Login'
import User from './User'
import Details from "./Details"

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/user/:id' element={<Details/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes