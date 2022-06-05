import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const {isAuth,toggleAuth}=useContext(AppContext);

const handleSubmit=(e)=>{
e.preventDefault();
    axios({url:'https://reqres.in/api/login',
            method:'post',
            data:{
                email,password
            }
}).then(res=>{
    alert("login Successful");
    if(!isAuth)
    {
    toggleAuth();
    setEmail("");
    setPassword("");
    <Navigate to='/user'/>
    }
    
}).catch(err=>{
    alert("wrong id or Password");
})
}

const handleClick=()=>{
    console.log("hello");
    toggleAuth();
}

  return (
    <div>
        <div>Login Page</div>
        <form onSubmit={handleSubmit} >
        <div><input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} /></div>
        <div><input type="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} /></div>
        <button type='submit'>submit</button>
        </form>
        <div><button onClick={handleClick} >LogOut</button></div>
    </div>
  )
}

export default Login