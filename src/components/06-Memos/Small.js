import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Componente renderizado nuevamente");
  return <small>{value}</small>;
});
