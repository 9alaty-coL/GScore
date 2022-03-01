import classes from './LeaderBoardRow.module.scss'

const LeaderBoardRow = props => {
    const row = props.row
    return (
        <div className={classes.row}>
        <div className={classes.clubInfo}>

            <span>{row.position}</span>
            <img src={row.team.crestUrl} />
            <span>{row.team.name}</span>
        </div>
        <div className={classes.points}>
            <span>{row.playedGames}</span>
            <span>{row.won}</span>
            <span>{row.draw}</span>
            <span>{row.lost}</span>
            <span>{row.points}</span>
            <span>{row.goalsFor}</span>
            <span>{row.goalsAgainst}</span>
            <span>{row.goalDifference}</span>
        </div>
        </div>
    )
}

export default LeaderBoardRow