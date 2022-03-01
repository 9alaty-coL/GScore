import classes from "./Header.module.scss";
import Banner from "../Home/Banner";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  const leagues = useSelector((state) => state.leagues);
  const leagueList = leagues.map((value) => (
    <NavItem key={value.id} imgSrc={value.logoSource} leagueName={value.name} slug={value.slug} />
  ));
  return (
    <header className={classes.header}>
      <div className={classes.banner}>
        <Link className={classes.link} to="/">
          <Banner small />
        </Link>
      </div>
      <ul>{leagueList}</ul>
    </header>
  );
};

export default Header;
