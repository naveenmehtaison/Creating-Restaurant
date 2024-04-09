import classes from './Cart.module.css'
import React, { useContext } from "react"
import ReactDom from 'react-dom'
import Modal from './Modals/Modal'
import { useState } from 'react'
import CartContext from '../../Store/cart-context'
const Cart = (props)=>{
    const [amount, setamount]=useState(1)
    const [amount2, setamount2]=useState(1)
    const Ctx = useContext(CartContext)
    const handleCartButton=()=>{
        props.closecart()
    }
    const handleSubstraction=(item)=>{
        item.quantity=item.quantity-1
        setamount(item.quantity)
    }
    const handleAddition=(item)=>{
        item.quantity=parseInt(item.quantity)+1
        setamount2(item.quantity)

    }
    const prev = Ctx.items
    const CartArr = (<ul  className={classes['cart-items']}>{[...prev].map((item)=>(<li>{item.Name} :
     <br></br> {item.Price} 
     <span style={{width:'20px',height: '30px',marginLeft:'30px', backgroundColor: '#ccc', }}>
        x{item.quantity}</span> <button onClick={()=>handleSubstraction(item)}style={{float:'right'}}>-</button><button onClick={()=>handleAddition(item)} style={{float:'right'}}>+</button> 
        <hr></hr></li>))}</ul>)
    console.log(prev,'iminsidecartarr')
    let  totalAmount = 0
    for(var i=0; i<prev.length; i++){
        console.log(prev[i])
        totalAmount=totalAmount+(prev[i].Price*prev[i].quantity)
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