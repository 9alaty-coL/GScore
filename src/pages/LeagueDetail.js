import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Detail/LeaderBoard";

const LeagueDetail = () => {
  const params = useParams();
  const leagues = useSelector(state => state.leagues)
  const leagueId = leagues.find(value => value.slug === params.slug).id
  if (!leagueId){
    return <h1>League not found!</h1>
  }
  return (
    <>
      <Header />
      <LeaderBoard leagueId={leagueId} />
    </>
  );
};

export default LeagueDetail;
