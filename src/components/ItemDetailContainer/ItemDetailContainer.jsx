import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"

import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { Loading } from "../Condicionales/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {

    const [producto, setProducto]= useState({})
    const [loading, setLoading]=useState(true)

    const {pid}= useParams()

    useEffect(()=>{
      
      const dbFirestore=getFirestore() //permite conectar al servicio de firestore
      const queryDoc=doc(dbFirestore, "productos", pid)  // esta funcion permite acceder o apuntar a un documento de firestore(un objeto)

      getDoc(queryDoc) // lo traemos con una funcion (en singular porque es UN producto). getDoc es una promesa
      .then(resultado => setProducto( {id: resultado.id, ...resultado.data() } ))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))

    }, [])

    console.log(producto)
  return (
    <div>
      {
        loading ?
          <Loading />
        :
          <ItemDetail producto={producto}/>
      }
        
    </div>
  )
}

