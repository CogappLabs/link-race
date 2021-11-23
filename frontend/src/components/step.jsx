import React from "react";
import Obj from "./obj";

const Step = ({ step }) => {
  return (
    <div>
      <a>{step.progress}</a>
      <li>
        <Obj url={step.url} />
        <ul>
          {[step.nextBestStep, ...step.neighbours].sort().map((neighbour) => (
            <li>
              <Obj url={neighbour} />
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
};

export default Step;
