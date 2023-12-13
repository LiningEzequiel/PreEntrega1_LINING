import { useState } from "react"
import ItemCounter from "../../ItemCounter/ItemCounter"

import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"


export const ItemDetail = ({producto}) => {

  const [isCounter, setIsCounter]=useState(true)


// const { addProduct, cartList } = useContext(CartContext) 

// llamamos a la funcion para consumir el contexto
  
const { addProduct, cartList } = useCartContext()

const onAdd=(cantidad)=>{
    console.log(`Ud ha comprado ${cantidad} unidades` )
    addProduct( {...producto, cantidad} )// aqui va la funcion que agrega productos al carrito
    setIsCounter(false)
  }

  console.log(cartList)
  return (
    <div>


     <div className="row">
       <div className="col-12 text-center">
          <h1>Detalle del Producto</h1>
       </div>
      </div> 
    <div className="row">
        
        <div className="col-4 text-center contImagen">
            <img src={producto.imgUrl} alt={producto.title}  className="img-fluid"/>

        </div>
        <div className="col-8 text-center contTexto">
            <div className="contDetalle">
              <div className="contCampo">
               <h2 className="nombreAutor">{producto.title}</h2>
               <h3 className="nombreAutor">{producto.autor}</h3>
              </div>
              <div className="contCampo">
              <h3>Precio: AR$ {producto.price}</h3>
              </div>
             {
              isCounter ?
                <ItemCounter initial={1} stock={producto.stock} onAdd={onAdd}/>
              :
              <>
               <Link className="btn btn-primary" to="/">Seguir comprando</Link>
               <Link className="btn btn-warning" to="/cart">Ver carrito</Link>
               

              </>
             }
             
             
             <div className="contCampo">
              <h3>Stock: {producto.stock}</h3>
              <h3>Categoria: {producto.category}</h3>
             </div>
             
            </div>

            <div className="contDescripcion">
            <p>Reseña del libro: <br/></p>
            <p>{producto.description}</p>

        </div>


            

        </div>

        
   
        

    </div>

    
    </div>
  )
}

