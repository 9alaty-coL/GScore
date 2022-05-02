import classes from "./Header.module.scss";
import Banner from "../Home/Banner";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavItem from "./NavItem";
import { Link, NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import Login from "../authen/Login";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showAuthen, setShowAuthen] = useState(false);
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
  const accountInfo = (
    <div className={classes.info}>
      <div className={classes.name}>Tran Tan Loc</div>
      <div className={classes.options}>
        <span className={classes.coins}>1400 gc</span>
        <Link to="/" className={classes.logout}>
          Logout
        </Link>
      </div>
    </div>
  );
  const login = isLogin ? accountInfo : <h1 onClick={()=>setShowAuthen(true)}>Login</h1>;
  return (
    <header className={classes.contain}>
      {showAuthen && <Login onBackdropClick={()=>setShowAuthen(prev=>!prev)} onCloseClick={()=>setShowAuthen(prev=>!prev)}/>}
      <div className={classes.header}>
        <div className={classes.banner}>
          <Link className={classes.link} to="/">
            <Banner small />
          </Link>
        </div>
        {login}
        <div
          tabIndex="0"
          className={`${classes.dropdown} ${
            showDropdown ? classes.active : ""
          }`}
          onClick={(e) => {
            setShowDropdown((prev) => !prev);
            e.target.focus();
          }}
          onBlur={() => setShowDropdown(false)}
        >
          <div className={classes.menu}></div>
        </div>
        <ul>{leagueList}</ul>
      </div>
      <ul className={`${showDropdown ? classes.active : ""}`}>{leagueList}</ul>
    </header>
  );
};

export default Header;
