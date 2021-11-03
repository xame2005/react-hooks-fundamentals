import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((res) => res.json())
      .then((data) => setState({ data, loading: false, error: null }));

    setTimeout(() => {
      if (isMounted.current) {
        setState({ data: null, loading: false, error: null });
      }
    });
  }, [url]);

  return state;
};
