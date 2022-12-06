import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Phones from './components/Phones.jsx';
import RealEstate from './components/RealEstate.jsx';
import axios from "axios";
import Vehicle from './components/Vehicle.jsx'
import Home from './components/home.jsx';
import {Routes,Route} from "react-router-dom"
import Login from './components/Login.jsx'

function App() {

const [data,setData]=useState([])
const [phones,setPhones]=useState([])
const [vehicle,setVehicle]=useState([])
console.log(data);
console.log(phones);
console.log(vehicle);
  useEffect(()=>{
    axios.get("http://localhost:5000/prod/prod").then(async res=>{
      
     await setData(res.data)
  
    await setPhones(res.data.filter((element)=>{return element.Category==="phone"}))
    await setVehicle(res.data.filter((element)=>{return element.Category==="vehicle"}))
  })
  },[])

  
    
 


  return (
    <div className="App">
    
   <NavBar/>  
<Routes>
  <Route>

<Route path='/phones' element={<Phones phones={phones} />}/>
<Route path='/' element={<Home/>}/>
<Route path='/vehicle' element={<Vehicle vehicle={vehicle}/>}/>
<Route path='/realEstate' element={<RealEstate />}/>
<Route path='/fot' element={<Footer/>}/>
<Route path='/login' element={<Login/>}/>

  </Route>
</Routes>
    < Footer/>
        </div>
  );
}

export default App;
