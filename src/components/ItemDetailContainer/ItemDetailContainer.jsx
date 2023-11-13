import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [product, setProduct]= useState({})

    const {pid}= useParams()

    useEffect(()=>{
      mFetch(pid)
      .then(data => setProduct(data))
      .catch(error => console.log(error))
    }, [])

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

