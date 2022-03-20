import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import classes from "./LeagueDetail.module.scss";

import Header from "../components/Header/Header";
import LeaderBoard from "../components/Detail/Leaderboard/LeaderBoard";
import OptionSelect from "../components/Detail/Leaderboard/OptionSelect";
import TopScorer from "../components/Detail/Topscorer/TopScorer";
import Matches from "../components/Detail/Matches/Matches";

const LeagueDetail = () => {
  const [option, setOption] = useState(2)
  const params = useParams();
  const leagues = useSelector((state) => state.leagues);
  const leagueId = leagues.find((value) => value.slug === params.slug).id;
  const [ content, setContent] = useState(<p>Invalid action :((</p>)

  useEffect(() => {
    switch(option){
      case 1:
        setContent(<Matches leagueId={leagueId} />)
        break;
      case 2:
        setContent(<LeaderBoard leagueId={leagueId} />)
        break;
      case 3:
        setContent(<TopScorer leagueId={leagueId} />)
        break;
      default:
        break;
    }
  }, [option, leagueId])
  
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.leagueDetail}>
        <OptionSelect option={option} setOption={setOption}/>
        {content}
      </div>
    </div>
  );
};

export default LeagueDetail;
