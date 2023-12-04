import { createContext, useState } from "react";

export const CartContext = createContext([])

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

    // aqui va la funcion cantidad total de productos
    const totalPrice = ()=> cartList.reduce((totalPrecio, producto)=> totalPrecio += (producto.price * producto.cantidad) , 0 )
    const totalCantidad = ()=> cartList.reduce((totalProduct, producto)=> totalProduct += producto.cantidad , 0 )



    
    // aqui va precio total de productos
    // aqui va la funcion eliminar un producto por id

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