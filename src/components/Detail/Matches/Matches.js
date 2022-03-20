import { useCallback, useState, useEffect, useRef } from "react";
import useHttp from "../../../hooks/use-http";
import useInfiniteScroll from "../../../hooks/use-infinite-scroll";
import useInfiniteScrollUp from "../../../hooks/use-infinite-scroll-up";
import classes from "./Matches.module.scss";
import Matchday from "./Matchday";
import LoadingSpinner from "../../UI/LoadingSpinner";

let go  = 1

const Matches = (props) => {
  const matchesRef = useRef();
  const [minMatchday, setMinMatchday] = useState(null);
  const [maxMatchday, setMaxMatchday] = useState(null);
  const [currMatches, setCurrMatches] = useState([]);

  useEffect(()=>{
    if (go === 1){
      go = 2
    }else{
      setCurrMatches([])
      setMinMatchday(null)
      setMaxMatchday(null)
      setIsFetching('initial')
    }

  }, [props.leagueId])


  const {
    data,
    sendRequest: getMatches,
    status,
  } = useHttp(`https://api-gscore.herokuapp.com/matches/${props.leagueId}`);

  const {
    data: data2,
    sendRequest: getMatches2,
    status: status2,
  } = useHttp(`https://api-gscore.herokuapp.com/matches/${props.leagueId}`);


  const insertMatchesTail = useCallback(async () => {
    if (
      maxMatchday > 38 &&
      currMatches[currMatches.length - 1][0].matchday == 38
    ) {
      return;
    }
    await getMatches(maxMatchday && { matchday: maxMatchday });
    setIsFetching(false);
  }, [maxMatchday]);

  const insertMatchesHead = useCallback(async () => {
    if (minMatchday &&
      minMatchday < 1 &&
      currMatches[0][0].matchday == 1
    ) {
      return;
    }

    if (minMatchday === 0){
      await getMatches2( { matchday: 0 });
      setIsFetching2(false);
      return;
    }
    
    await getMatches2(minMatchday && { matchday: minMatchday });
    setIsFetching2(false);
  }, [minMatchday, currMatches]);

  const { setIsFetching } = useInfiniteScroll(insertMatchesTail, matchesRef);
  const { setIsFetching: setIsFetching2 } = useInfiniteScrollUp(insertMatchesHead, matchesRef);

  useEffect(() => {
    if (data) {
      const cpr = data[0].matchday;
      if (minMatchday === null){
        setMinMatchday(cpr - 2)
      }
      if (maxMatchday === null || maxMatchday <= 38) {
        setMaxMatchday(cpr + 2);
      }

      const md1 = data.filter((value) => value.matchday === cpr);
      const md2 = data.filter((value) => value.matchday != cpr);
      setCurrMatches((prev) => {
        let newPrev = [...prev];
        if (md1.length > 0) {
          newPrev.push([...md1]);
        }
        if (md2.length > 0) {
          newPrev.push([...md2]);
        }

        return newPrev;
      });
    }
  }, [data]);

  useEffect(() => {
    if (data2) {
      const cpr = data2[0].matchday;
      if (minMatchday === null || minMatchday >= 1) {
        setMinMatchday(cpr - 2);
      }

      const md1 = data2.filter((value) => value.matchday === cpr);
      const md2 = data2.filter((value) => value.matchday != cpr);
      setCurrMatches((prev) => {
        let newPrev = [...prev];
        if (md2.length > 0) {
          newPrev.unshift([...md2]);
        }
        if (md1.length > 0) {
          newPrev.unshift([...md1]);
        }

        return newPrev;
      });
    }
  }, [data2]);

  const matches = currMatches.map((value, index) => {
    return <Matchday key={value[0].id} data={value} />;
  });

  return (
    <div className={classes.main} ref={matchesRef}>
      <div className={classes.loadingSpinner}>
        {status2 === "pending" && <LoadingSpinner />}
      </div>
      <div className={classes.matches}>{matches}</div>
      <div className={classes.loadingSpinner}>
        {status === "pending" && <LoadingSpinner />}
      </div>

    </div>
  );
};

export default Matches;
