
import { useCartContext } from "../../context/CartContext"


export const CartWidget = () => {

 
 
  const {totalCantidad} = useCartContext()
  return (
    <div>
       <p>🛒 {totalCantidad()}</p> 
    </div>
  )
}
