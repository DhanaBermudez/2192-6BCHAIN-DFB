import React from "react";
import './App.css';
export default function App() {
    return (
      <div>
        <Lists isOnHand ={true} />
        
      </div>
    );
}

function Onhand() {
    return(
        <div>
        <h1 className="Onhand">My Strawhat</h1>  <h1 className="Onhand">Gum Gum Fruit</h1>  <h1 className="NotOnhand">The red Vest</h1>
</div>
    );
}


function Not() {
    return(
        <><h1>My Strawhat</h1><h1>Gum Gum Fruit</h1><h1>The Red Vest</h1></>
    );
}
const isItemOnHand = true;



function Lists(props) {
    const isOnHand = props.isOnHand;
    if (isOnHand) {
        return(
            <Onhand/>
        );

    }
    return(
        <Not />
    )
}