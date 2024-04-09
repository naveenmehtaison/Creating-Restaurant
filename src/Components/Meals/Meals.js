import React from "react";
import classes from './Meals.module.css';
import classes2 from './Button.module.css';
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { useState } from "react";
import { useRef } from "react";
const Meals = () => {
    const val = useRef(null)
    
    console.log('im inside Meals')
    const Dummy_arr = [
        {Name:'Chicken Biryani', Des:'Bringing the special taste of Hyderabad', Price:'70'},
        {Name:'Kadai Paneer', Des:"Veg Special", Price:'300'},
        {Name:'cHILLY Paneer', Des:"Veg Special", Price:'200'}
    ];
    const Ctx=useContext(CartContext)
    const addItems =(item)=>{
        const quantity = document.getElementById(`input${item.Name}`);
        console.log('j-')
        const ko = item.Price
        // item.Price=(parseInt(ko)*parseInt(quantity.value))
        Ctx.addItem(item)
        item.quantity=quantity.value
        console.log(parseInt(quantity.value),'iii',item.Name,item.Price,item)
      
    }

    return(
        <div className={classes.header2}>
            {Dummy_arr.map((ele,i)=>(
                <div key={i}>
                    <div>                    
                        <label htmlFor={`input${ele.Name}`} style={{float:'right'}}>Amount</label>
                        <br></br>
                        <input id={`input${ele.Name}`} style={{float:'right'}} defaultValue={1}  type='number'/>
                        <h3>{ele.Name}</h3> 
                        <p>{ele.Des}</p>
                        <p style={{color:'red'}}>{ele.Price}</p> 
                        <button onClick={()=>addItems(ele)} className={classes2.button2} align='right'>+Add</button>

                    </div>

                <hr />
  
                </div>
                
            ))}
        </div>
    );
}

export default Meals;
