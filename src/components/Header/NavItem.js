import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink className={({isActive}) => classes.NavLink + ' ' + (isActive?classes.linkActive:'')} to={`/${props.slug}`}>
        <img src={props.imgSrc} />
        <span>{props.leagueName}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
