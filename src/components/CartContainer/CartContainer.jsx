import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartContainer.css"


export const CartContainer = () => {

    const { cartList, vaciarCarrito, totalPrice, removeProduct } = useContext(CartContext)
  return (
          <div>
        { cartList.map(producto => <div key={producto.id} className="contenedor">
                                       
                                       <div className="contenedorImg flex-fill w-50">
                                       <img className="imagen img-thumbnail" src={producto.imgUrl}/>
                                       <div>
                                       <h5 className="p-2 align-self-center">{producto.title}</h5>
                                       <h6 className="p-2 align-self-center">{producto.autor}</h6>
                                       </div>
                                       </div>
                                      
                                       
                                       
                                       <p className="p-2 flex-fill align-self-center">AR$ {producto.price}</p> 
                                       <p className="p-2 flex-fill align-self-center">{producto.cantidad}</p>
                                       <p className="p-2 flex-fill align-self-center">AR$ {producto.price * producto.cantidad}</p> 
                                       <button className="btn btn-danger p-2 flex-fill align-self-center" onClick={()=>removeProduct(producto.id)}>X</button>

                                   </div>)}

                              <div className="contenedorFooter d-flex justify-content-evenly">
                                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

                                <div>
                                  {totalPrice() !=0 && <p>TOTAL:  AR$ {totalPrice()} </p>}
                                </div>
                                
                                <button className="btn btn-success" onClick={vaciarCarrito}>Finalizar Compra</button>

                              </div>

                                   
          </div>
  )
}

