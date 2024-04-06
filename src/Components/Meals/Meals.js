import React from "react";
import classes from './Meals.module.css'; // Import CSS module for Meals component
import classes2 from './Button.module.css'; // Import CSS module for Button component

const Meals = () => {
    const Dummy_arr = [
        {Name:'Chicken Biryani', Des:'Bringing the special taste of Hyderabad', Price:'Rs 70'},
        {Name:'Kadai Paneer', Des:"Veg Special", Price:'Rs 300'}
    ];

    return(
        <div className={classes.header2}>
            {Dummy_arr.map((ele,i)=>(
                <div key={i}>
                    <div>
                    
                        <label htmlFor="input" style={{float:'right'}}>Amount</label>
                        <br></br>
                        <input id='input' style={{float:'right'}} type='number'/>
                        <h3>{ele.Name}</h3> 
                        <p>{ele.Des}</p>
                        <p style={{color:'red'}}>{ele.Price}</p> 
                        <button className={classes2.button2} align='right'>+Add</button>

                    </div>

                <hr />
  
                </div>
                
            ))}
        </div>
    );
}

export default Meals;
