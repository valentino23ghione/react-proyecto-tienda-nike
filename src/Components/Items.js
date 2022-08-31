
import {ItemCount} from "./ItemCount"

export function Items ({infoZapatillas}){
return(

<div class="Zapatillas">

<img class="zapatilla-img-top" src={infoZapatillas.foto} alt=""></img>
<div class="zapatilla-body">

<h5 class="zapatilla-title">{infoZapatillas.titulo}</h5>
<p class="zapatilla-text">{infoZapatillas.descripcion} </p>
<ItemCount stock = {infoZapatillas.stock}></ItemCount>

</div>






</div>






)





}