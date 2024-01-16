//comparing functions
import React from "react";
import './ConditionalDemo.css';

function Greeting(){
    return(
        <h1>Hello! I am a standard function.</h1>
    );
}

const ArrowGreeting = () => (
    <h1>Hello! I am an arrow function,</h1>
);

//function with an arrow function

function ShinyButton() {
    const handleClick = () => {
        alert("You cliked me!");
    
}
return(
    <button onClick={handleClick}>
        Click This Button!
    </button>
);
}
export default ShinyButton;