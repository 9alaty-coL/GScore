import { Link } from "react-router-dom";
import classes from "./League.module.scss";

const League = (props) => {
  return (
    <>
      <Link to={`/${props.slug}`}>
        <img className={classes.logo} src={props.logoSource} />
      </Link>
    </>
  );
};

export default League;
