import React from "react";
import "./TodoSearch.css"  
function TodoSearch ({variable, setVariable }) {
    
    const valueChanged = (event) => {
        setVariable(event.target.value)
    }
    return(
         <input onChange={valueChanged}   placeholder="Buscar To do´s"></input> 
         
    )

}
export {TodoSearch}