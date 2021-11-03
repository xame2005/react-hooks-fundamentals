import React, { useRef, useLayoutEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-4" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
