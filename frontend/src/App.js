
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Singup from './Components/Singup';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import Updateproduct from './Components/Updateproduct';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import PrivateComponent from './Components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>} />
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<Updateproduct/>}/>

        
        <Route path='/profile' element={<h1>Profile</h1>}/>
        <Route path='/logout' element={<h1>logout</h1>}/>
       
        </Route>
        
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
