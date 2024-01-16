import React from "react";
import './TodoList.module.css';

export default class TodoList extends React.Component {
    render() {
        return(
            <div>
                <h2>To-Do List</h2>
               <ul>
                <li>Clean Porch</li>
                <li>Wash Car</li>
                <li> Attend BCHAIN Class</li>
               </ul>
                </div>


        );
    }
}
