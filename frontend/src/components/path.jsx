import React from "react";
import Step from "./step";

const Path = ({
  path,
  showNeighbours,
  progress,
  setProgress,
  neighbours,
  setNeighbours,
}) => {
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
              neighbours={neighbours}
              setNeighbours={setNeighbours}
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
            <Step key={step.url} step={step} showNeighbours={showNeighbours} />
          ))}
        </ol>
      </div>
    );
  }
};

export default Path;
