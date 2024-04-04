import { Fragment } from "react"
import React from "react"
import HeaderCartButton from "./HeaderCartButton"
import mealsImg from '../../Assets/meals.jpg'
import classes from './Heading.module.css'
import Restaurant_summary from "./Restaurant_summary"
const Heading=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
                <HeaderCartButton/> 

            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg}/>
                <Restaurant_summary/>
            </div>
            
    
        </Fragment>
    )

}
export default Heading