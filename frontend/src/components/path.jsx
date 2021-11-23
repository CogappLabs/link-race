import React from "react";
import Step from "./step";

const Path = ({ path, showNeighbours }) => {
  if (showNeighbours) {
    return (
      <div>
        <ul>
          {path.map((step) => (
            <Step key={step.url} step={step} showNeighbours={showNeighbours} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ol>
          {path.map((step) => (
            <Step key={step.url} step={step} showNeighbours={showNeighbours} />
          ))}
        </ol>
      </div>
    );
  }
};

export default Path;
