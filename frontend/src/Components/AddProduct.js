import React from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function () {
    const [name,setName]=useState("");
    const [prize,setPrize]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [err,setErr]=useState(false);
    const navigate=useNavigate();

    const get_Add_Data= async()=>
    {
        console.log(name ,prize,category,company);
        if(!name || !prize || !category || !company )
        {
            setErr(true);
            return false;
        }
        const userid= JSON.parse( localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,prize,category,company,userid}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.log(result);
        navigate("/");
    }
  return (
     
  

    <div className='add_product'>
        <h1>Add Product</h1>
        <input type='text' placeholder='Enter product name' className='inputbox' value={name} onChange={(e)=>setName(e.target.value)}/>{err && !name &&<span className='invalid-name'>Enter valid name</span>}
        <input type='text' placeholder='Enter product prize' className='inputbox' value={prize} onChange={(e)=>setPrize(e.target.value
            )}/> {err && !prize &&<span className='invalid-name'>Enter valid prize</span>}
        <input type='text' placeholder='Enter product category' className='inputbox' value={category} onChange={(e)=>setCategory(e.target.value)}/>{err && !category &&<span className='invalid-name'>Enter valid Category</span>}
        <input type='text' placeholder='Enter product company' className='inputbox' value={company} onChange={(e)=>setCompany(e.target.value)}/>{err && !company &&<span className='invalid-name'>Enter valid company</span>}
       
        <button className='appbtn' onClick={get_Add_Data}>Add</button>
    </div>
  )
}
