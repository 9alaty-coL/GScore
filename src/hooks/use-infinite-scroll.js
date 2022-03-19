import { useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (callback, DOMElement) => {
  const [isFetching, setIsFetching] = useState('initial');

  const handleScroll = () => {
    if (
      Math.ceil(DOMElement.current.offsetHeight + DOMElement.current.scrollTop) >=
      DOMElement.current.scrollHeight
    ){
      setIsFetching(true);
    }
  };

  useEffect(() => {
    DOMElement.current.addEventListener("scroll", handleScroll);
    return () => {
      DOMElement.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(async () => {
    if (isFetching == 'initial'){
      await callback()
      DOMElement.current.scrollTop = DOMElement.current.offsetHeight / 2
      setIsFetching(false)
      return
    }
    if (isFetching){
      if (DOMElement.current.scrollHeight === DOMElement.current.clientHeight){
        return
      }
      await callback()
    }
  }, [isFetching]);

  return {setIsFetching};
};

export default useInfiniteScroll;
