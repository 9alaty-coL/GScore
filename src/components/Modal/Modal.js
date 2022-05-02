import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.scss'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = props =>{
    return <div className={classes.overlay}>
    {props.children}</div>
}

const Modal = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick}/>, document.getElementById('portal'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('portal'))}
    </React.Fragment>
}

export default Modal