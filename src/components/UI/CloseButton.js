import classes from './CloseButton.module.scss'

const CloseButton = props => {

    return <div className={classes.closeBtn} onClick={props.onCloseClick}>
    </div>
}

export default CloseButton