import { useState, useEffect, useCallback } from "react";

const useInfiniteScrollUp = (callback, DOMElement) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll2 = () => {
    if (
      (DOMElement.current.scrollTop) == 0 && DOMElement.current.clientHeight != 0
    ){
      setIsFetching(true);
    }
  };

  useEffect(() => {
    DOMElement.current.addEventListener("scroll", handleScroll2);
    return () => {
      DOMElement.current.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  useEffect(async () => {
    if (isFetching){
      let prev = DOMElement.current.scrollHeight
      await callback()
      DOMElement.current.scrollTop = DOMElement.current.scrollHeight - prev
    }
  }, [isFetching]);

  return {setIsFetching};
};

export default useInfiniteScrollUp;
