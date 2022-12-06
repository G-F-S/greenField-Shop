import React from 'react';
import './App.css';


import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    
   <NavBar/>  
<Routes>
  <Route>
<Route path='/fot' element={<Footer/>}/>
<Route path='/fot' element={<Footer/>}/>
<Route path='/fot' element={<Footer/>}/>
<Route path='/fot' element={<Footer/>}/>

  </Route>
</Routes>
    < Footer/>
        </div>
  );
}

export default App;
