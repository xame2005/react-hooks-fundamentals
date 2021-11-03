import React from "react";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        + 1
      </button>

      <button className="btn btn-primary" onClick={() => decrement(3)}>
        - 1
      </button>

      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
};
