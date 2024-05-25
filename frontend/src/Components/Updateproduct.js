import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// import { json } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function () {
    const [name,setName]=useState("");
    const [prize,setPrize]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    // const [err,setErr]=useState(false);
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>
    {
        get_product_detail();
    },[])

    const get_product_detail=async()=>
    {
        let resul=await fetch(`http://localhost:5000/product/${params.id}`);
        resul=await resul.json();
        setName(resul.name);
        setPrize(resul.prize);
        setCategory(resul.category);
        setCompany(resul.company);
    }
    const get_Add_Data= async()=>
    {
        console.log(name,prize,company,category);
        // if(!name || !prize || !category || !company )
        // {
        //     setErr(true);
        //     return false;
        // }
        let result=await fetch(`http://localhost:5000/produc/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,prize,category,company}),
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
        <h1>Update Product</h1>
        <input type='text' placeholder='Enter product name' className='inputbox' value={name} onChange={(e)=>setName(e.target.value)}/>
        {/* {err && !name &&<span className='invalid-name'>Enter valid name</span>} */}
        <input type='text' placeholder='Enter product prize' className='inputbox' value={prize} onChange={(e)=>setPrize(e.target.value
            )}/>
             {/* {err && !prize &&<span className='invalid-name'>Enter valid prize</span>} */}
        <input type='text' placeholder='Enter product category' className='inputbox' value={category} onChange={(e)=>setCategory(e.target.value)}/>
        {/* {err && !category &&<span className='invalid-name'>Enter valid Category</span>} */}
        <input type='text' placeholder='Enter product company' className='inputbox' value={company} onChange={(e)=>setCompany(e.target.value)}/>
        {/* {err && !company &&<span className='invalid-name'>Enter valid company</span>} */}
       
        <button className='appbtn' onClick={get_Add_Data}>Update</button>
    </div>
  )
}
