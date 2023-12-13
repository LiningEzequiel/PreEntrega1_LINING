import { createContext, useContext, useState } from "react";

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // aqui se define estados y funciones globales
    // se define un estado q va contener un array con los productos que voy seleccionando

    const [cartList, setCartList]=useState([])

    const isCart = (pid)=> cartList.findIndex(producto => producto.id===pid)

    const addProduct = (producto) => {
const indexProduct=isCart(producto.id)
        if(indexProduct!=-1){
          cartList[indexProduct].cantidad+= producto.cantidad
          return setCartList( [...cartList] )
        }
        setCartList([
            ...cartList,
            producto
        ])

    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    //  funcion para calcular cantidad total de productos
    const totalPrice = ()=> cartList.reduce((totalPrecio, producto)=> totalPrecio += (producto.price * producto.cantidad) , 0 )
   
   // funcion para calcular precio total de productos
    const totalCantidad = ()=> cartList.reduce((totalProduct, producto)=> totalProduct += producto.cantidad , 0 )

    
    // funcion eliminar un producto por id

    const removeProduct= (pid) => {
        setCartList(cartList.filter(producto => producto.id!=pid))
    }

   return (
    <CartContext.Provider value={{
         cartList, 
         addProduct,
         vaciarCarrito,
         totalPrice,
         totalCantidad,
         removeProduct
         
    }}>
        {children}
    </CartContext.Provider>


)
}