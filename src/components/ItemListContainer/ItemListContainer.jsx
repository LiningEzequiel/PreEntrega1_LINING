import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ItemList } from "./ItemList/ItemList"
import { Loading } from "../Condicionales/Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import "./ItemListContainer.css"


export const ItemListContainer = ({ greeting }) => {
 
  const [productos, setProductos]= useState([])
  // const [producto, setProducto]=useState({})
  const [loading, setLoading]=useState(true)
  const { cid } = useParams()

  useEffect(()=>{
    const dbFirestore= getFirestore()
    const queryCollection= collection(dbFirestore, "productos")
    const queryItems = cid ? query(queryCollection, where("category", "==", cid)) : queryCollection


    
      
      

  getDocs(queryItems) // es una promesa (en plural porque es un array)
  .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }) ))) //hay que envolver el objeto entre parentesis porque confunde las {} con las callback y se pierde el retorno implicito
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))


    
  }, [cid])
 


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
