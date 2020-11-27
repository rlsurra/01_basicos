import React from 'react';

const Producto = ({producto,carrito,setCarrito,productos}) => {

    const {nombre,precio,id} = producto

    //Agregar producto al carrito
    const seleccionarProducto = () => {
        const producto = productos.filter(p => p.id === id)[0]; //El 0 es xq devuelve un arreglo
        setCarrito([
            ...carrito, //copio el carrito para agregar y no sobreescribir
            producto
        ]);
    }

    const eliminarProducto = () => {
        const productos = carrito.filter(p => p.id !== id);
        setCarrito(productos);
    }

    return ( 
        <div>
            <li> {nombre} </li>
            <p> HOT SALE: ${precio} </p>
            {productos
            ?
                <button 
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                >
                Comprar
                </button>
            :
                <button 
                    type="button"
                    onClick={ () => eliminarProducto(id) }
                >
                Eliminar
                </button>
            }

        </div>
     );
}

//document.querySelector('#comprar').addEventListener() en JS tradicional
//Poniendole al boton id = comprar

export default Producto;