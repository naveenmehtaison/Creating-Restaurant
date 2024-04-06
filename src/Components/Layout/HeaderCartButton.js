import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton  = props =>{
    const CartButton = ()=>{
        console.log('im inside Headercartbutton')
        props.oncartClick()
        

    }
    return <button onClick={CartButton} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>

         3
        </span>
    </button>
}
export default HeaderCartButton