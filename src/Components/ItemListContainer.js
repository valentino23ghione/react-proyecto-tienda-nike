export function ItemListContainer (props) {
const {nombre, apellido, mensaje} = props
    return(
<div>
<h1> {mensaje}</h1>
<p> mi nombre es {nombre} y mi apellido {apellido} </p>

</div>



)
    
}
export default ItemListContainer