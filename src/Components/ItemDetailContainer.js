import React from "react"
import {ItemDetail} from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const {id} = useParams

    const [item, setItem] = useState([])

    const getItem = (id)=>{
        return new Promise ((resolve, reject)=>{
            const idLista = item.filter( item=> item.id === parseInt(id))
            resolve (idLista)
        })
    }

    useEffect(()=>{
        const getProducto = async ()=>{
            const producto = await getItem(id);
            console.log('productoooooo', producto)
            setItem(producto)
        }
        getProducto()
    },[id])

    console.log(item, 'iteeeeem')







    return (

<div>
    <ItemDetail></ItemDetail>
</div>


)



}

export default ItemDetailContainer