import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'


function App() {
  
  //State -> reaccion a la interaccion de los usuarios
  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa', precio: 50},
    { id: 2, nombre: 'Pantalon', precio: 40},
    { id: 3, nombre: 'Buzo', precio: 30},
    { id: 4, nombre: 'Gorra', precio: 20}
  ]);

  //State para el carrito de compras
  const [ carrito, setCarrito ] = useState([]); //inicializa en 0

  return ( //El return solo puede retorar un elemento (contenedor) -> con el div es un dive extra que no es necesario
      <Fragment>

        <Header 
          titulo="TIENDA VIRTUAL"
        />

        <h1> Listado de productos </h1>
        {productos.map(producto => (
          <Producto
            key = {producto.id} 
            producto = {producto}
            carrito = {carrito}
            setCarrito = {setCarrito}
            productos = {productos} //Le paso para buscar contra id
          />
        ))}

        <Carrito 
          carrito = {carrito}
          setCarrito = {setCarrito}
        />

        <Footer />
      </Fragment>
  );
}

export default App;
