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
      </div>
    );
  } else {
    return (
      <div>
        {path.map((step) => (
          <Step key={step.url} step={step} showNeighbours={showNeighbours} />
        ))}
      </div>
    );
  }
};

export default Path;
