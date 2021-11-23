import React from "react";
import nodes from "../data/nodes.json";

function urlParse(url, nodes) {
  const metadata = nodes[url];
  return [url, metadata.title, metadata.description, metadata.img];
}

const Step = ({ step }) => {
  return (
    <div>
      <a>{step.progress}</a>
      <li>
        {urlParse(step.url, nodes).join(" - ")}
        <ul>
          {[step.nextBestStep, ...step.neighbours].sort().map((neighbour) => (
            <li>{urlParse(neighbour, nodes).join(" - ")}</li>
          ))}
        </ul>
      </li>
    </div>
  );
};

export default Step;
