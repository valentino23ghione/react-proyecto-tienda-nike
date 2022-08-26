import { useState } from "react";
export const ItemCount = ({stock, initial, agregarProducto})=>{
const [contador, setContador]= useState(initial);
const incrementar= ()=> {
    if(contador<stock){
        setContador(contador + 1)
    }


}

const decrementar= ()=> {
    if(contador>0){
        setContador(contador - 1)
    }
    
}
return (
<div>
<p>Numero de clics {contador}</p>
<button onClick={incrementar}>Incrementar</button>
<button onClick={decrementar}>Decrementar</button>
<button onClick={()=>(agregarProducto(contador))} 
style={{background: contador>1 ? "green" : "white"}}>Agregar al Carrito</button>
<button onClick={()=>(agregarProducto(contador))} 
className={`btnDanger ${contador>1 ? "activo" : "inactivo"}`}>Agregar al Carrito</button>
{
    contador>1 ? 
    <p>usted ya puede agregar productos</p>
    :
    <p>Incremente los Productos</p>
}
</div>


)


}
export default ItemCount