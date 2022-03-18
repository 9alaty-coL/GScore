import classes from './Matchday.module.scss'
import Match from './Match'

const Matchday = props => {

    const matches = props.data.map(value => {
        return <Match key={value.id} data={value}/>
    })

    return (
        <div className={classes.matchday}>
            {matches}
        </div>
    )
}

export default Matchday