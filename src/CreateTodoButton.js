import React from "react";
import "./CreateButton.css"
function CreateTodoButton (props) {
const onCLickButton = (mensaje) =>{
    alert(mensaje)
}
    return (
        <button onClick={() => onCLickButton('ajksjkas') } 
        
        > + 
        </button>
        // aqui se envuelven las funciones en arrowsfunctions para que no sea invocadas

    )
}
export {CreateTodoButton}