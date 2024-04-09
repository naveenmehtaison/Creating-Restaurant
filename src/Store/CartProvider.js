import CartContext from "./cart-context"
import { useEffect, useState } from "react"

const CartProvider=props=>{
    const[cart,setcart]=useState([])
    let items =[]
    const addItemHandler=(item)=>{setcart([item,...cart])}
    const removeItemHandler=(id)=>{}
    const cartContext={
        items:cart,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
    <CartContext.Provider value={cartContext}>
        {props.children}

    </CartContext.Provider>)
}
export default CartProvider