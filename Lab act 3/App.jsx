import { useState } from 'react'
import './App.css'
import Hello from "./components/hello";
import Welcome from './components/welcome';
import ParentComponent from './components/ParentComponent';
import BookList from './components/BookList';
import MovieList from './components/MovieList';
import TodoList from './components/TodoList';
import ConditionalDemo1 from './components/ConditionalDemo1';
import ConditionalDemo2 from './components/Conditional-Demo2';
import ConditionalDemo3 from './components/ConditionalDemo3';
import ConditionalDemo4 from './components/ConditionalDemo4';

function App() {
 
  return (
    <>
     <div>
        <h1>Dhana Grace F. Bermudez</h1>
      </div>
    {/* <div>
        <TodoList/>
      </div>
      <div>
        <br></br>
       <BookList/>
       <br></br>
      </div>
      <br></br>
      <br></br>
      <div>
       <MovieList/>
      </div> */}
      <div>
        <h2>This is a Conditional Demo 1</h2>
        <ConditionalDemo1/>

        <h2>This is a Conditional Demo 2</h2>
        <ConditionalDemo2/>

        <h2>This is a Conditional Demo 3</h2>
        <ConditionalDemo3/>

        <h2>This is a Conditional Demo 4</h2>
        <ConditionalDemo4/> 
        
      </div>
      <div>
        
      </div>

    </>
  )
}

export default App;
//DHANA GRACE F. BERMUDEZ
//WD - 401
