import React from "react";
import "./TodoItem.css"

function TodoItem(propied){
   
     

    return (
        <li>
            <span>C</span>
            <p style={{color:'red'}}>{propied.text}</p>
            <span>X</span>


        </li>
    )
}
export {TodoItem}