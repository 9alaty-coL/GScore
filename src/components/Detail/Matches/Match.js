import classes from "./Match.module.scss";

const Match = (props) => {

  let status = <span style={{color:'white'}}>Fulltime</span>

  if (props.data.status === 'SCHEDULED'){
    const date = new Date(props.data.utcDate)
  
    status = [
      <span>{date.toLocaleDateString()}</span>,
      <span>{date.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})}</span>
    ]
  }

  if (props.data.status === 'POSTPONED'){
    status = [<span style={{color:'red'}}>Postponed</span>, <span style={{color:'#888'}}>Undefined</span>]
  }

  if (props.data.status === 'ON_LIVE'){
    status = [
      <span style={{color:'green'}}>LIVE</span>,
      <div className={classes.live}></div>,
    ]
  }
  
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
          {status}
      </div>
      <div className={classes.awayTeam}>
        <img src={props.data.awayTeam.crestUrl} />
        <span>{props.data.awayTeam.name}</span>
      </div>
    </div>
  );
};

export default Match;
