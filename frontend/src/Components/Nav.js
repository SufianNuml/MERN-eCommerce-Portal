import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import img1 from "../pics/1.png";
 const Nav=()=> {
  
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>
  {
    localStorage.clear();
    navigate('/singup');
  }
  return (
    <div>
       
      {
     
      auth?
        <ul className='nav-ul'>
          <li className='nav-im'><img src={img1} /></li>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add-Product</Link></li>
            {/* <li><Link to="/update">Updat-Product</Link></li> */}
           
           
            <li><Link to="/profile">Profile</Link></li>
           <li> <Link to="/singup" onClick={logout}>Log Out ({JSON.parse(auth).name})</Link></li>
          
            
            
        </ul>:
        
       <ul className='nav-ul second-nav-ul'>
         <li className='nav-img'><img src={img1}/></li>
       <li><Link to="/singup">Sing Up</Link></li>
                <li><Link to="/login">Login</Link></li>
       </ul>
 }
    </div>
  )
}
export default Nav;