import React from 'react'
import './TodoCounter.css' 

function TodoCounter() {

    return (
        <h2 className='TodoCounter'> Has completado X de Y To do´s</h2>
    )


}

// export default TodoCounter Al hacer este export, debemos import namecualquiera from ruta
export {TodoCounter} // Con este export no necesariamente le pondremos cualqueir nombre, import {TodoCounter} from 'route' necesary
