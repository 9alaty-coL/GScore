import classes from "./Header.module.scss";
import Banner from "../Home/Banner";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const leagues = useSelector((state) => state.leagues);
  const leagueList = leagues.map((value) => (
    <NavItem
      key={value.id}
      imgSrc={value.logoSource}
      leagueName={value.name}
      slug={value.slug}
    />
  ));
  return (
    <header className={classes.contain}>
      <div className={classes.header}>
        <div className={classes.banner}>
          <Link className={classes.link} to="/">
            <Banner small />
          </Link>
        </div>
        <div
          className={classes.dropdown}
          onClick={setShowDropdown.bind(null, (prev) => !prev)}
        >
          <div className={classes.menu}></div>
        </div>
        <ul>
          {leagueList}
        </ul>
      </div>
      <ul className={`${showDropdown ? classes.active : ""}`}>{leagueList}</ul>
    </header>
  );
};

export default Header;
