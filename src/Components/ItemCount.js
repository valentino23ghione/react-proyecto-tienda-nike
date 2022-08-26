import { useState } from "react";
export function ItemCount (props){
   const {stock} = props 
   const [contador, setContador] = useState(0)

   function sumaNum (){
    if ( contador < stock){
        setContador (contador + 1)
    }
    else{
        alert(" No hay mas stock correspondiente")
    }


}

function restaNum(){
    if ( contador > 0){
        setContador (contador - 1 )
    }
}

function agregarProd(){
    if (contador  === 0)
    {

    }

    else if (contador === 1) {
        alert(`Se agregó ${contador} el producto al carrito`)
    }
    else{
        alert(`Se agregaron ${contador} los productos al carrito`)
    }

}



return(
<div>
    <p> Productos seleccionados {contador} </p>
    <button onClick={sumaNum}> + </button>
    <button onClick={restaNum}> - </button>
    <hr></hr>
    <button onClick={agregarProd}  > agregar al carrito </button>
</div>
)




}
export default ItemCount