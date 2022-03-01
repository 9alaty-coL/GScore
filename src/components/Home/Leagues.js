import classes from "./Leagues.module.scss";
import League from "./League";
import { useSelector } from "react-redux";



const Leagues = () => {
  const leaguesData = useSelector(state => state.leagues)
  const leagues = leaguesData.map((value) => <li key={value.id}><League slug={value.slug} leagueId={value.id} logoSource={value.logoSource} /></li>);
  return (
    <>
      <ul className={classes.allLeague}>{leagues}</ul>
    </>
  );
};

export default Leagues;
