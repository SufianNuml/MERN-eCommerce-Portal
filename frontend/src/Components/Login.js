import React from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>
    {
      const auth=localStorage.getItem('user');
    if(auth)
    {
      navigate('/');
    }
    },[])
    const print= async()=>
    {
        console.log(email , password);
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.log(result);
        if(result.name)
        {
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
            
        }
        else{
            alert("incorrect id & pass")
        }
        

    }
  return (

    <div className='login'>
        <h1 >Login</h1>
        <input type='text' className='inputbox' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' className='inputbox' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='appbtn' type='button' onClick={print}>Login</button>
        

    </div>
  )
}
