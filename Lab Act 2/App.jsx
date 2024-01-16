import { useState } from 'react'
import './App.css'
import Hello from "./components/hello";
import Welcome from './components/welcome';
import ParentComponent from './components/ParentComponent';
import BookList from './components/BookList';
import MovieList from './components/MovieList';
import TodoList from './components/TodoList';
import ShinyButton from './components/Conditional-Demo-1';


function App() {
 
  return (
    <>
     <div>
        <h1>Dhana Grace F. Bermudez</h1>
      </div>
    <div>
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
      </div>

    </>
  )
}

export default App;
//DHANA GRACE F. BERMUDEZ
//WD - 401
