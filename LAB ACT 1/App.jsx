import { useState } from 'react'
import './App.css'
import Hello from "./components/hello";
import Welcome from './components/welcome';
import ParentComponent from './components/ParentComponent';


function App() {
 
  return (
    <>
      <div>
        <Hello/>
       <Welcome/>
       <h1> React Props Example</h1>
       <ParentComponent/>
      </div>
    
    </>
  )
}

export default App;
//DHANA GRACE F. BERMUDEZ
//WD - 401
