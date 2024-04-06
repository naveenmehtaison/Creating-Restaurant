import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'
const Backdrop =(props)=>{
    return <div className={classes.backdrop}/>
}
const ModalOverlay =(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const Portal = document.getElementById("creatingportal")
const Modal =(props)=>{
    return <Fragment>
        {ReactDom.createPortal(<Backdrop/>,Portal)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,Portal)}
    </Fragment>
}
export default Modal