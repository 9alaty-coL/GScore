import classes from "./login.module.scss";
import Card from "../UI/Card";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <Modal onBackdropClick={props.onBackdropClick}>
      <Card onCloseClick={props.onCloseClick}>
        <div className={classes.login}>
          <h1>
            <span>Login</span>
          </h1>
          <content>
            <div className={classes.un}>
              <span>username</span>
              <input placeholder="username" />
            </div>
            <div className={classes.pw}>
              <span>password</span>
              <input placeholder="password" />
            </div>
            <div className={classes.sbmBtn}>
              <button>Go!</button>
            </div>
          </content>
          <div className={classes.register}>
            <span>
              New to GSCORE? create an{" "}
              <Link className={classes.link} to="/">
                account
              </Link>
              !
            </span>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default Login;
