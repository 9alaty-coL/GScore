import classes from "./LeaderBoard.module.scss";
import LeaderBoardRow from "./LeaderBoardRow";
import useHttp from "../../../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";

const LeaderBoard = (props) => {
  const { status, error, data, sendRequest } = useHttp(
    `https://api.football-data.org/v2/competitions/${props.leagueId}/standings`
  );
  let table;

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // console.log(status)
  if (!props.leagueId) {
    return <h1>League not found!</h1>;
  }

  if (status === "pending") {
    table = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && error) {
    table = <h2>{error}</h2>;
  }
  if (status === "completed" && !error) {
    table = data.standings[0].table.map((value) => (
      <LeaderBoardRow key={value.team.id} row={value} />
    ));
    // table = <LoadingSpinner />
  }

  return (
    <div className={classes.leaderBoard}>
      <LeaderBoardRow header />
      {table}
    </div>
  );
};

export default LeaderBoard;
