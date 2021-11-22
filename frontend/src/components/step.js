import React from "react";
import nodes from "../data/nodes.json";

const Step = ({ step }) => {
  const metadata = nodes[step.url];
  return (
    <div>
      <li>
        {[
          metadata.title,
          step.url,
          step.progress,
          metadata.img,
          metadata.description,
        ].join(" - ")}
      </li>
    </div>
  );
};

export default Step;
