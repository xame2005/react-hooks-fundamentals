import React from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../02-useEffect/effects.css";
import { useState } from "react";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-outline-primary mt-5" onClick={toggleShow}>
        Show / Hide
      </button>
    </div>
  );
};
