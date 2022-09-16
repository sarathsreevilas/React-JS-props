import React from "react";

export const States = ({ states }) => {
  return (
    <div>
      {states.map((state) => (
        <div className="bg-warning">
          <h1>{state.name}</h1>
          <h6>Language : {state.language}</h6>
          <h7>Population : {state.population}</h7>
        </div>
      ))}
    </div>
  );
};
