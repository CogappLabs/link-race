import React from "react";
import Step from "./step";

const Path = ({ path }) => {
  return (
    <div>
      <ol>
        {path.map((step) => (
          <Step key={step.url} step={step} />
        ))}
      </ol>
    </div>
  );
};

export default Path;
