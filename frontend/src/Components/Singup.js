import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Singup() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPass]=useState("");
    const navigate=useNavigate();
    useEffect(()=>
  {
    const auth=localStorage.getItem('user');
  if(auth)
  {
    navigate('/');
  }
  },[])
    const getData= async()=>
    {
        console.log(name , email , password);
        let result= await fetch('http://localhost:5000/register',{
          method:"post",
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        })
        result=await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
      navigate('/');
    }
  return (
    <div className='singup'>
        <h1 >Register</h1>
        <input className='inputbox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
        <input className='inputbox' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input className='inputbox' type='text' value={password} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password'/>
        <button className='appbtn' type='button' onClick={getData}>Submit</button>
    </div>
  )
}
