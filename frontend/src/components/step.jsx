import React from "react";
import Obj from "./obj";

const Neighbours = ({ step, progress, setProgress }) => {
  const stepHandler = (e) => {
    // if click.url = step.nextBestStep, +1 to progress
    if (e.target.id === step.nextBestStep) {
      setProgress(progress + 1);
    } else {
      console.log("wrong");
    }
  };

  return (
    <ul>
      {[step.nextBestStep, ...step.neighbours].sort().map((neighbour) => (
        <li key={neighbour}>
          <div className="option">
            <Obj url={neighbour} />
            <button id={neighbour} className="button" onClick={stepHandler}>
              Step here
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Step = ({ step, showNeighbours, progress, setProgress }) => {
  return (
    <div>
      <li>
        <Obj url={step.url} />
      </li>
      {showNeighbours && (
        <Neighbours step={step} progress={progress} setProgress={setProgress} />
      )}
    </div>
  );
};

export default Step;
