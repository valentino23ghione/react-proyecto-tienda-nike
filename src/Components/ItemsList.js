import { Items } from "./Items";
import imagenes from "./Assets/img"
import { useEffect, useState } from "react";


const arrayItems = [

{

titulo: "Zapatilla",
descripcion: "Zapatilla Air Force 1 Black",
foto: imagenes.airforceblack1,
stock:6


},

{
titulo:"Zapatilla",
descripcion: "Zapatilla air force 1 Off-white",
foto: imagenes.airforceoff-white,
stock:5




}







]

const obtenerLista = () => {
return new Promise ((resolve, reject) => {

setTimeout(() => {
resolve (arrayItems)

}, 2000);
})






}


obtenerLista().then((resolucion)=>{
    console.log(resolucion)
})



export function ItemList () {

return (

<>
<Items infoZapatilla={arrayItems[0]}></Items>
<Items infoZapatilla={arrayItems[1]}></Items>
</>


)




}