import classes from "./Home.module.scss";
import Leagues from "../components/Home/Leagues";
import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <div className={classes.home}>
      <Banner />
      <Leagues />
    </div>
  );
};

export default Home;
