import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const User = () => {
    const [data,setData]=useState([]);
    const {isAuth}=useContext(AppContext);

useEffect(()=>{
    axios.get('https://reqres.in/api/users').then(res=>{
        setData(res.data.data);
    })
},[])
if(!isAuth)
{
    return <Navigate to='/login' />
}


  return (
    <div>
        {data.map((d)=>{
         return  (<div key={d.id}>
            <img src={d.avatar} alt="" />
            <div>{d.first_name}</div>
            <Link to={`/user/${d.id}`}>more details</Link>
        </div>) 
        })}
    </div>
  )
}

export default User