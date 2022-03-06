import classes from "./TopScorerRow.module.scss";
import useHttp from "../../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useEffect } from "react";

const TopScorerRow = (props) => {
  const row = props?.row;

  // const {data: teamData, error: teamError, status: teamStatus, sendRequest: teamSendRequest} = useHttp(`https://api.football-data.org/v2/teams/${row?.team.id}`)
  // useEffect(() => {
  //   if (row !== undefined)
  //   teamSendRequest()
  // }, [teamSendRequest, row]);
  let teamImage
  if (props.teamStatus === 'pending'){
    teamImage = <div className="centered"><LoadingSpinner small/></div>
  }

  if (props.teamStatus === 'completed'){
    teamImage = <img src={props.crestUrl} />
  }

  // if (teamStatus === 'comleted' && teamError){
  //   teamImage = <p>{teamError}</p>
  // }

  const rowJSX = props.header ? (
    <div className={classes.header}>
      <div className={classes.clubInfo}>
        <span>#</span>
        <span>Name</span>
        <span>Team</span>
      </div>
      <div className={classes.points}>
        <span>TG</span>
      </div>
    </div>
  ) : (
    <div className={classes.row}>
      <div className={classes.clubInfo}>
        <span>{props.index}</span>
        {/* <img src={row.team.crestUrl} /> */}
        <span>{row.player.name}</span>
        {/* <span>{row.team.name}</span> */}
        {teamImage}
      </div>
      <div className={classes.points}>
        <span>{row.numberOfGoals}</span>
        {/* <span className={classes.secondary}>{row.won}</span>
        <span className={classes.secondary}>{row.draw}</span>
        <span className={classes.secondary}>{row.lost}</span>
        <span>{row.points}</span>
        <span className={classes.third}>{row.goalsFor}</span>
        <span className={classes.third}>{row.goalsAgainst}</span>
        <span>{row.goalDifference}</span> */}
      </div>
    </div>
  );
  return rowJSX ;
};

export default TopScorerRow;
