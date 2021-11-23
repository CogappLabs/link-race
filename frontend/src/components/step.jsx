import React from "react";
import Obj from "./obj";

const Neighbours = ({ step }) => {
  return (
    <ul>
      {[step.nextBestStep, ...step.neighbours].sort().map((neighbour) => (
        <li key={neighbour}>
          <div className="option">
            <Obj url={neighbour} />
            <div className="button">
              <a>Click?</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Step = ({ step, showNeighbours }) => {
  return (
    <div>
      <a>{step.progress}%</a>
      <li>
        <Obj url={step.url} />
      </li>
      {showNeighbours && <Neighbours step={step} />}
    </div>
  );
};

export default Step;