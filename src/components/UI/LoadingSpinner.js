import classes from './LoadingSpinner.module.css';

const LoadingSpinner = props => {
  return <div className={`${classes.spinner} ${props.small ? classes.small : ''}`} ></div>;
}

export default LoadingSpinner;
