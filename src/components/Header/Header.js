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
          tabIndex="0"
          className={`${classes.dropdown} ${showDropdown ? classes.active : ""}`}
          onClick={e=>{
            setShowDropdown(prev => !prev)
            e.target.focus()
          }}
          onBlur={()=>setShowDropdown(false)}
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
