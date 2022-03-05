import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Detail/LeaderBoard";
import OptionSelect from "../components/Detail/OptionSelect";
import classes from "./LeagueDetail.module.scss";
import { useState, useEffect } from "react";

const LeagueDetail = () => {
  const [option, setOption] = useState(2)
  const params = useParams();
  const leagues = useSelector((state) => state.leagues);
  const leagueId = leagues.find((value) => value.slug === params.slug).id;
  const [ content, setContent] = useState(<p>Invalid action :((</p>)

  useEffect(() => {
    switch(option){
      case 1:
        setContent(<p>Matches</p>)
        break;
      case 2:
        setContent(<LeaderBoard leagueId={leagueId} />)
        break;
      case 3:
        setContent(<p>Top scorer</p>)
        break;
      default:
        break;
    }
  }, [option])
  
  return (
    <>
      <Header />
      <div className={classes.leagueDetail}>
        <OptionSelect option={option} setOption={setOption}/>
        {content}
      </div>
    </>
  );
};

export default LeagueDetail;
