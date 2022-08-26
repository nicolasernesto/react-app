import React from "react";
import "./TodoItem.css"

function TodoItem(propied){
   const onComplete = () => {
    alert('Se completo el ' + propied.text)
   }
   
   const onDelete = () => {
    alert('Se elimino ' + propied.text)
   }  

    return (
        <li>
            <span onClick={propied.onComplete} className={`first icon-check ${propied.completed && 'active'}`}>√</span>
             
            <p className={`${propied.completed && 'active-p'}`}>{propied.text}</p>
            <span onClick={propied.onDelete} className={`icon-check`}>X</span>


        </li>
    )
}
export {TodoItem}