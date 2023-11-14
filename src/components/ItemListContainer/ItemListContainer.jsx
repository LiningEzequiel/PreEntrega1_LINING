import { useEffect } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useState } from "react"

import "./ItemListContainer.css"
import { ItemList } from "./ItemList/ItemList"





export const ItemListContainer = ({ greeting }) => {
 
  const [productos, setProductos]= useState([])

  useEffect(()=>{
    mFetch()
    .then(data => setProductos(data))
    .catch(error => console.log(error))
  }, [])
 

  return (
    <div className="fondo">
        <h2>{ greeting }</h2>

        <ItemList productos={productos} />
        
        
    </div>
  )
}
