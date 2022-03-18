import classes from "./Match.module.scss";

const Match = (props) => {
  return (
    <div className={classes.match}>
      <div className={classes.homeTeam}>
        <img src={props.data.homeTeam.crestUrl} />
        <span>{props.data.homeTeam.name}</span>
      </div>
      <div className={classes.detail}>
          <div className={classes.score}>
              <span>{props.data.score.fullTime.homeTeam}</span>
              <span>{props.data.score.fullTime.awayTeam}</span>
          </div>
          <span>{(props.data.status.toLowerCase())}</span>
      </div>
      <div className={classes.awayTeam}>
        <img src={props.data.awayTeam.crestUrl} />
        <span>{props.data.awayTeam.name}</span>
      </div>
    </div>
  );
};

export default Match;
