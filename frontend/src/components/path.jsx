import React from "react";
import Step from "./step";

const Path = ({ path, showNeighbours, progress, setProgress }) => {
  if (showNeighbours) {
    return (
      <div>
        <ul>
          {path.map((step) => (
            <Step
              key={step.url}
              step={step}
              showNeighbours={showNeighbours}
              progress={progress}
              setProgress={setProgress}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ol>
          {path.map((step) => (
            <Step
              key={step.url}
              step={step}
              showNeighbours={showNeighbours}
              progress={progress}
              setProgress={setProgress}
            />
          ))}
        </ol>
      </div>
    );
  }
};

export default Path;
