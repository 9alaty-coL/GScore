import classes from "./LeaderBoardRow.module.scss";

const LeaderBoardRow = (props) => {
  const row = props?.row;
  const rowJSX = props.header ? (
    <div className={classes.header}>
      <div className={classes.clubInfo}>
        <span>#</span>
        <span></span>
        <span>FC</span>
      </div>
      <div className={classes.points}>
        <span>PG</span>
        <span className={classes.secondary}>W</span>
        <span className={classes.secondary}>D</span>
        <span className={classes.secondary}>L</span>
        <span>Pts</span>
        <span className={classes.third}>GF</span>
        <span className={classes.third}>GA</span>
        <span>GD</span>
      </div>
    </div>
  ) : (
    <div className={classes.row}>
      <div className={classes.clubInfo}>
        <span>{row.position}</span>
        <img src={row.team.crestUrl} />
        <span>{row.team.name}</span>
      </div>
      <div className={classes.points}>
        <span>{row.playedGames}</span>
        <span className={classes.secondary}>{row.won}</span>
        <span className={classes.secondary}>{row.draw}</span>
        <span className={classes.secondary}>{row.lost}</span>
        <span>{row.points}</span>
        <span className={classes.third}>{row.goalsFor}</span>
        <span className={classes.third}>{row.goalsAgainst}</span>
        <span>{row.goalDifference}</span>
      </div>
    </div>
  );
  return rowJSX ;
};

export default LeaderBoardRow;
