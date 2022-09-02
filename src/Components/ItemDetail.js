import { useState, useEffect } from "react";
import getFetch from "./helper/helper.js";


const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=>{
getFetch
.then(response => {
setData(response.find(prod => prod.id === 1))
setLoading(false)

})


}, [])

console.log(data)
return (
<div className="item-container">
<h1>Item Detail ContainerS</h1>

{
loading ? <h2>Cargando ....</h2>
:
<div className="item-detail">
<img src={data.img} alt=""/>
<h2>{data.name}</h2>
<h3>{data.price}</h3>

<div className="detail">
<h4>{data.year}</h4>
</div>

<p>{data.description}</p>

</div>
}


</div>

)








}
export default ItemDetail