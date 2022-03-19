import { useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(true);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight
    ) {
      console.log('crolling')
      setIsFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendRequest = useCallback(async () => {
    await callback()
    setIsFetching(false)
  }, [])

  useEffect(async () => {
    if (isFetching){
      sendRequest()
    }
  }, [isFetching, sendRequest, callback]);

  return { sendRequest};
};

export default useInfiniteScroll;
