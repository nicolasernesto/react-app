import React from "react";
import "./TodoSearch.css"  
function TodoSearch (props) {
    const [variable,setVariable] = React.useState('defectoValue') // se crea un estado para la variable, y como segundo param la funcion que lo setea
    const valueChanged = (event) => {
        setVariable(event.target.value)
    }
    return(
        [<input onChange={valueChanged}   placeholder="Buscar To do´s"></input>,
        <p>Valor hook: {variable}</p>]
    )

}
export {TodoSearch}