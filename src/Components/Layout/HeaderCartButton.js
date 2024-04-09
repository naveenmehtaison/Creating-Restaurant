import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
import { useState } from "react";
const HeaderCartButton  = props =>{
    const [cartValue,setcartValue]= useState(0)
    const cartCtx = useContext(CartContext)
    const CartButton = ()=>{
        console.log('im inside Headercartbutton')
        props.oncartClick()

    
    }

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
        
    },0)
  
    return <button onClick={CartButton} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>

         {cartCtx.items.length}
        </span>
    </button>
}
export default HeaderCartButton