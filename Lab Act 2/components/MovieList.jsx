import React from "react";
import './MovieList.module.css';

export default class MovieList extends React.Component {
    render() {
        return(
            <>
            <h2><center>My Favorite Movies</center></h2>
 <div class="gallery">
  <a target="_blank" href="src\assets\a.jpeg"/>
    <img src="src\assets\a.jpeg" alt="Cinque Terre" width="250" height="250">
  </img>
 
 </div>
 <br></br>
 <div class="gallery">
  <a target="_blank" href="src\assets\b.jpeg" />
    <img src="src\assets\b.jpeg" alt="Cinque Terre" width="250" height="250">
  </img>
 </div>
 <br></br>
 <div class="gallery">
  <a target="_blank" href="src\assets\c.jpeg"/>
    <img src="src\assets\c.jpeg" alt="Cinque Terre" width="250" height="250">
  </img>
 </div>


 
          </>
    );
    }
    }
