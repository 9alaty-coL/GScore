import classes from './Banner.module.scss'

const Banner = props => {
    return (
        <div className={`${classes.banner} ${props.small?classes.small:''}`}>
            <div className={classes.banner__logo}>
                <img src='/Leagues-logo/icon.png' />
            </div>
            <div className={classes.banner__name}>
                <span>GScore</span>
            </div>
        </div>
    )
}

export default Banner