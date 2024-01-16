import React from "react";
import './BookList.module.css';

export default class BookList extends React.Component {
    render() {
        return(
            <div>
                <table class="my_table">
                <tr>
              <th colspan="3"> 3 favorite books </th>
                </tr>
                <tr>
                <td > Hunger Games </td> 
                <td> The Selection </td>
                <td> Divergent </td>
                </tr>
                </table>
                </div>


        );
    }
}
