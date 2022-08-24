import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App propejemplo="XD" /> 
    // el codigo jsx es javascript optimizado para que paresca html (babel , webpack se encargan)
    // es como poner React.createElement('div',{}) que posteriormente se veran en html como etiquetas 
    // los componentes parten con mayuscula, por tanto app que se improt adel archivo ./App es un webcomponent
    // se escribe classname para los class de html para evitar el class de javascript, una pequeña diferencia
    // los componentes son invisibles para html, por eso se renderizan con .render
    // podemos mandar propiedades a los elementos como parametros, a los cuales se pueden acceder mediante props.namepropiedad
    // al igual que los backtits en js, podemos utilizar esta vez en jsx sin los backtics la sintaxis {} para hacer referencia a variables
    // react no identifica los cambios en index.js pero si en todos los otros archivos, por tanto hay que recargar la pagina
    // si escribimos al componene con dos etiquetas una de apertura y otra de cierre <app> ....CONTENT... </app> todo lo que le mandemos
    // en content quedara guardado o referenciado por defecto por props.children!!
    // se puede renderizar un solo elemento, por tanto todo debe ir dentro del mismo por cada componenete
    // se envuelve con react.fragment para que no se vean los div ( si los envolvemos en div)
    
);
 
