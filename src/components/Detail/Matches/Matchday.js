import classes from './Matchday.module.scss'
import Match from './Match'

const Matchday = props => {

    const matches = props.data.map(value => {
        return <Match key={value.id} data={value}/>
    })

    return (
        <div className={classes.matchday}>
        <div className={classes.title}>
            <span>Matchday {props.data[0].matchday}</span>
        </div>
        <div className={classes.matches}>
            {matches}

        </div>
        </div>
    )
}

export default Matchday