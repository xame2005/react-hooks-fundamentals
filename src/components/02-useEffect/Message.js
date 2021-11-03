import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const mouseMove = window.addEventListener("mousemove", (e) => {
      console.log(e.pageX, e.pageY);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres Genial!</h3>
    </div>
  );
};
