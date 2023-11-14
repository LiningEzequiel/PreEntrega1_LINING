import { useEffect } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useState } from "react"

import "./ItemListContainer.css"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"





export const ItemListContainer = ({ greeting }) => {
 
  const [productos, setProductos]= useState([])
  const { cid } = useParams()

  useEffect(()=>{
    if(cid){
      mFetch()
      .then(data => setProductos(data.filter(producto => producto.category == cid)))
      .catch(error => console.log(error))
    } else{
      mFetch()
    .then(data => setProductos(data))
    .catch(error => console.log(error))
    }
    
  }, [cid])
 

  return (
    <div className="fondo">
        <h2>{ greeting }</h2>

        <ItemList productos={productos} />
        
        
    </div>
  )
}
