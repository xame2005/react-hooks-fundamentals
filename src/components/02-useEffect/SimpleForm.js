import React, { useEffect, useState } from "react";

import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>

      {name === "Samuel" && <Message />}
    </>
  );
};
