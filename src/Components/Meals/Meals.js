import React from "react"
import classes from './Meals.module.css'
const Meals=()=>{
    const Dummy_arr = [{Name:'Chicken Biryani', Des:'Bringing the special taste of Hyderabad', Price:'Rs 70'},{Name:'Kadai Paneer',Des:"Veg Special",Price:'Rs 300'}]
    return(
        <div className={classes.header2}>
            {Dummy_arr.map((ele,i)=>(
                <div>
                    <h3>{ele.Name}</h3> 
                    <p>{ele.Des}</p>
                    <p style={{color:'red'}}>{ele.Price} </p> 
                    <hr></hr>
                </div>

            ))}
        </div>
    )

}
export default Meals