import React from "react";
import './App.css';
export default function App() {
    return (
        <><><div className={'${isItemOnHand === true ? "green" : "red"}'}>
            <GreenOrRed />
        </div>
        </><><div className={'${isItemOnHand === false ? "red" : "green"}'}>
            <Onhand />
        </div>
            </></>
    );
}

function Onhand() {
    return<h1>The Red Vest</h1>;
}


function Not() {
    return <><h1>My Strawhat</h1><h1>Gum Gum Fruit</h1></>
}
const isItemOnHand = true;



function GreenOrRed(props) {
    const isItemOnHand = props.isItemOnHand;
    return isItemOnHand ? <Onhand/> : <Not />;
}