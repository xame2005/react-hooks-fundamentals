import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInput] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
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

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
