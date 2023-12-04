import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = () => {

 
  const {totalCantidad} = useContext(CartContext)
  return (
    <div>
       <p>🛒 {totalCantidad()}</p> 
    </div>
  )
}
