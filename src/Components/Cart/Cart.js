import classes from './Cart.module.css'
import React, { useContext } from "react"
import ReactDom from 'react-dom'
import Modal from './Modals/Modal'
import { useState } from 'react'
import CartContext from '../../Store/cart-context'
const Cart = (props)=>{
    const [amount, setamount]=useState(0)
    const Ctx = useContext(CartContext)
    const handleCartButton=()=>{
        props.closecart()
    }
    const prev = Ctx.items
    const CartArr = (<ul  className={classes['cart-items']}>{[...prev].map((item)=>(<li>{item.Name} :  {item.Price}</li>))}</ul>)
    console.log(prev,'iminsidecartarr')
    let  totalAmount = 0
    for(var i=0; i<prev.length; i++){
        console.log(prev[i])
        totalAmount=totalAmount+prev[i].Price
    }

    return (
        
        <div>
            
            < Modal>
                    

                        {CartArr}
                        <div className={classes.total}>
                            
                            <span>totalAmount:{totalAmount}</span>
                        </div>
                        {/* {totalAmount} */}
                        <div className={classes.actions}>
                            <button onClick={handleCartButton} className={classes['button--alt']}>Close</button>
                            <button className={classes.button}>order</button>
                        </div>
                    
                
            </Modal>  
            
        </div>
      );
      
          
}
export default Cart