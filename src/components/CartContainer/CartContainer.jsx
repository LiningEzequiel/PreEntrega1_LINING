import { useState } from "react"


import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"
import "./CartContainer.css"
import { useCartContext } from "../../context/CartContext"

export const CartContainer = () => {

    const [formData, setFormData] = useState({
      name:"",
      phone:"",
      email:"",
      repetirEmail:""
    })

    
    const [isId, setIsId]=useState("")

    const { cartList, vaciarCarrito, totalPrice, removeProduct } = useCartContext()
    
    const handleOrder = async (evt) => {
      evt.preventDefault()
      const order = {}
      order.buyer = formData
      order.items = cartList.map(({id, name, price})=> ({id, name, price}))
      order.total = totalPrice()

      const db = getFirestore()
      const orderCollection = collection(db, "orders")
      
      addDoc(orderCollection, order)
      .then(resp => setIsId(resp.id))
      .catch(err => console.log(err))

      
    }

    const handleOnChange = (evt) => {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
    })
      
    }


  return (
 
        <div>

                     
                     <div>
                     
                           {totalPrice() ==0 ? 
                           
                           <>
                           <p className="p-2 align-self-center"> Tu carrito de productos está vacío </p>
                              <Link className="btn btn-success" to="/">Volver al catálogo</Link>
                           </>
                               
                           : 

                           <>
                              <div className="contenedor">
                               <div className="w-50 encabezadoCart">
                                <p>Tus Productos</p>
                               </div>

                               <div className="w-50 encabezadoCart">
                                <p className="p-2 encabezadoCartItem">Precio</p>
                                <p className="p-2 encabezadoCartItem">Cantidad</p>
                                <p className="p-2 encabezadoCartItem">Subtotal</p>
                               </div>

                              </div>

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
                               </div>













                                <div className="contenedorFooter d-flex justify-content-evenly">
                                   <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
          
                                   <div>
                                     <p>TOTAL:  AR$ {totalPrice()} </p>
                                   </div>
          
                                </div>
          
                      <div className="w-25 m-2 align-self-center">
                        <form className="form-control" onSubmit={handleOrder}>
                         <label>Ingrese su Nombre</label>
                         <input className="form-control" type="text" value={formData.name} name="name" onChange={handleOnChange}></input>
                         <br /><label>Ingrese su telefono</label>
                         <input className="form-control" type="text" value={formData.phone} name="phone" onChange={handleOnChange}></input>
                         <br /><label>Ingrese su correo</label>
                         <input className="form-control" type="text" value={formData.email} name="email" onChange={handleOnChange}></input>
                         <br /><label>Repita su correo</label>
                         <input className="form-control" type="text" value={formData.repetirEmail} name="repetirEmail" onChange={handleOnChange}></input>
          
                         <button className="p-3 m-3 btn btn-success">Finalizar Compra</button>
          
                        </form>
          
                        
                      </div>

                       {isId!="" && <label>Su orden de compra es: {isId} </label>}

                           </>
                            }
                     </div> 


                     
          
                      
          
                       
          
                      
                      
                      

            

            
                              
        </div>
  )
}

