import classes from "./Card.module.css";
import CloseButton from "./CloseButton";
import Banner from '../Home/Banner'

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.close}>
      <img src='/Leagues-logo/icon.png' />
        <CloseButton onCloseClick={props.onCloseClick}/>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
