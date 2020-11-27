import React from 'react';
import App from '../App';

function Header({titulo}) {

    const cant_productos = 18;

    let mensaje;
    if(cant_productos > 100){
        mensaje = 'Mayorista'
    } else{
        mensaje = 'Minorista'
    }

    return(
        <h1>{titulo}: {mensaje}</h1>
    )
}

export default Header;

//Function declaration

//En el RETURN es lo que SE VE EN PANTALLA
//Antes del return puedo escribir JS
//Con las {} en el return lo lee como JVs

//Forma vieja
//function Header(props) 

//Forma nueva (destructuring)
//function Header({titulo})