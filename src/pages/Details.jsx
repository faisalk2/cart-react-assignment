import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
const Details = () => {
    const {id}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(res=>{
        setData(res.data.data);
        })
    })
    
  return (
    <div>
        <img src={data.avatar} alt="" />
        <h1>{`${data.first_name} ${data.last_name}`}</h1>
        <div>{data.email}</div>

    </div>
  )
}

export default Details