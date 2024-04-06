import classes from './Cart.module.css'
import React from "react"
import ReactDom from 'react-dom'
import Modal from './Modals/Modal'
import { useState } from 'react'
const Cart = (props)=>{
    const handleCartButton=()=>{
        // console.log('close is being clicked')
        props.closecart()

    }

    // setoverlay(false)
    const CartArr = (<ul  className={classes['cart-items']}>{[{id:'c1',Name:'Chicken Biryani', 
    Des:'Bringing the special taste of Hyderabad', 
    Price:'Rs 70'}].map((item)=>(<li>{item.Name}</li>))}</ul>)
    return (
        <div>
            
            < Modal>
                    

                        {/* {overlay &&  CartArr} */}
                        <p>Biryani</p>
                        <div className={classes.total}>
                            
                            <span>Total Amount</span>
                            <span>80</span>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={handleCartButton} className={classes['button--alt']}>Close</button>
                            <button className={classes.button}>Exit</button>
                        </div>
                    
                
            </Modal>  
            
        </div>
      );
      
          
}
export default Cart