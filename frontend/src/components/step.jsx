import React, { useEffect } from "react";
import Obj from "./obj";

const Neighbours = ({
  step,
  progress,
  setProgress,
  neighbours,
  setNeighbours,
}) => {
  // initialise neighbours
  useEffect(() => {
    setNeighbours(
      [step.nextBestStep, ...step.neighbours]
        .sort()
        .map((n) => ({ url: n, tried: false }))
    );
  }, []);

  const stepHandler = (e) => {
    // if click.url = step.nextBestStep, +1 to progress
    // else, change tried to true, for CSS styling
    if (e.target.id === step.nextBestStep) {
      setProgress(progress + 1);
    } else {
      setNeighbours(
        neighbours.map((i) =>
          i.url === e.target.id ? Object.assign(i, { tried: true }) : i
        )
      );
    }
  };

  return (
    <div>
      {neighbours.map((neighbour) => (
        <div className="option">
          <Obj url={neighbour.url} />
          <button
            id={neighbour.url}
            onClick={stepHandler}
            className={`button ${neighbour.tried ? "tried" : ""}`}
          >
            Step here
          </button>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  step,
  showNeighbours,
  progress,
  setProgress,
  neighbours,
  setNeighbours,
}) => {
  return (
    <div>
      <Obj url={step.url} />
      {showNeighbours && (
        <Neighbours
          step={step}
          progress={progress}
          setProgress={setProgress}
          neighbours={neighbours}
          setNeighbours={setNeighbours}
        />
      )}
    </div>
  );
};

export default Step;
