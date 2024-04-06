import classes from './Cart.module.css'
import React from "react"
import ReactDom from 'react-dom'
import Modal from './Modals/Modal'
const Cart = (props)=>{
    const CartArr = (<ul  className={classes['cart-items']}>{[{id:'c1',Name:'Chicken Biryani', 
    Des:'Bringing the special taste of Hyderabad', 
    Price:'Rs 70'}].map((item)=>(<li>{item.Name}</li>))}</ul>)
    return(
        <Modal>

                    {CartArr}
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>80</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes['button--alt']}>Close</button>
                        <button className={classes.button}>Exit</button>
                    </div>
                
            
        </Modal>
    )
}
export default Cart