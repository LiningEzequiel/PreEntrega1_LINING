import { useEffect } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useState } from "react"

import "./ItemListContainer.css"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../Condicionales/Loading"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"




export const ItemListContainer = ({ greeting }) => {
 
  const [productos, setProductos]= useState([])
  const [producto, setProducto]=useState({})
  const [loading, setLoading]=useState(true)
  const { cid } = useParams()

  useEffect(()=>{
    const dbFirestore= getFirestore()
    const queryCollection= collection(dbFirestore, "productos")

    if(cid){
      
      const queryFilter= query(
        queryCollection, 
       where("category", "==", cid),
    )

  getDocs(queryFilter) // es una promesa (en plural porque es un array)
  .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }) ))) //hay que envolver el objeto entre parentesis porque confunde las {} con las callback y se pierde el retorno implicito
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))

    } else{
    
    getDocs(queryCollection) // es una promesa (en plural porque es un array)
    .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }) ))) //hay que envolver el objeto entre parentesis porque confunde las {} con las callback y se pierde el retorno implicito
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))

    }
    
  }, [cid])
 
console.log(productos)

  return (
          <>
            <h2 className="p-3 mb-2 bg-danger text-white text-center">{ greeting }</h2>
            <div className="fondo">
              {
                loading ? 
                  <Loading />
                :
                  <ItemList productos={productos} />

              }
                   
            </div>
          </>
    
  )
}
