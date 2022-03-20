import classes from './BallSpinner.module.scss'

const BallSpinner = () => {
    return <div className={classes.ballSpinner}>
        <div className={classes.one} />
        <div className={classes.two} />
        <div className={classes.three} />
    </div>
}

export default BallSpinner