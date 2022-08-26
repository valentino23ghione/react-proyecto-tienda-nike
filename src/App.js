import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
function App() {
  const [estadoCarrito, setEstadoCarrito] = useState ("Carrito vacio")
  const [numeroProductos, setNumeroProductos] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setEstadoCarrito("Esperando productos")
    }, 3000);
  },[numeroProductos])
  
  
  const agregar =(productos)=>{
    console.log("funcion agregar", productos)
    setNumeroProductos(productos);
    setEstadoCarrito(`el carrito tiene ${productos}`);
  }

  console.log("numeroProductos", numeroProductos);
  return (
    <> 
     <p>{estadoCarrito} </p>
    <Navbar></Navbar>
    <ItemListContainer nombre="valentino" apellido="ghione" mensaje="Bienvenidos a Tienda Nike"></ItemListContainer>
    <ItemCount stock={15} inital={0} agregarProducto={agregar}></ItemCount>
    </>
  );
}

export default App;
