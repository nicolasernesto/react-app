import React from "react";
import "./TodoItem.css"

function TodoItem(propied){
   
     

    return (
        <li>
            <span className={`first icon-check ${propied.completed && 'icon-check--active'}`}>C</span>
            <p>{propied.text}</p>
            <span>X</span>


        </li>
    )
}
export {TodoItem}