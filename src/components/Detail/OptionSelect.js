import classes from "./OptionSelect.module.scss";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const OptionSelect = props => {
  const {option, setOption} = props;
  const [choose, setChoose] = useState(false);
  const selectRef= useRef()
  return (
    <div className={classes.contain} onClick={e => e.target.focus()} ref={selectRef} onBlur={()=>setChoose(false)} tabIndex="0">
      <div className={classes.select} onClick={()=>setChoose(prev=>!prev)}>
        <span className={`${option === 1 ? classes.active : ""}`}>Matches</span>
        <span className={`${option === 2 ? classes.active : ""}`}>
          Standing
        </span>
        <span className={`${option === 3 ? classes.active : ""}`}>
          Top scorer
        </span>
        {!choose ? <FontAwesomeIcon className={classes.icon} icon={faChevronDown} /> : <FontAwesomeIcon className={classes.icon} icon={faChevronUp} /> }
      </div>
      <div className={`${classes.choose} ${choose ? classes.active: ''} `}>

      <span className={`${option === 1 ? classes.active : ""}`} onClick={()=>{setOption(1); selectRef.current.blur()}}>Matches</span>
      <span className={`${option === 2 ? classes.active : ""}`} onClick={()=>{setOption(2); selectRef.current.blur()}}>Standing</span>
      <span className={`${option === 3 ? classes.active : ""}`} onClick={()=>{setOption(3); selectRef.current.blur()}}>
        Top scorer
      </span>
      </div>
    </div>
  );
};

export default OptionSelect;
