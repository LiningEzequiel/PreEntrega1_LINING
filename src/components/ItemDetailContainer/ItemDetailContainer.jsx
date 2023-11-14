import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"

import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {

    const [producto, setProducto]= useState({})

    const {pid}= useParams()

    useEffect(()=>{
      mFetch(pid)
      .then(data => setProducto(data))
      .catch(error => console.log(error))
    }, [])

    console.log(producto)
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

