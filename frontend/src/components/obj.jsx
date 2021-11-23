import React from "react";
import nodes from "../data/nodes.json";

function urlParse(url, nodes) {
  const metadata = nodes[url];
  return {
    url: url,
    title: metadata.title,
    description: metadata.description,
    img: metadata.img,
  };
}

const Obj = ({ url }) => {
  const metadata = urlParse(url, nodes);
  return (
    <div className="parent">
      <div className="left">
        <img src={metadata.img} alt={metadata.title} width="100" height="100" />
      </div>
      <div className="right">
        <h2>{metadata.title}</h2>
        <p>{metadata.description}</p>
        <br />
        <a className="find-more" href={url} target="_blank" rel="noreferrer">
          Find out more...
        </a>
      </div>
    </div>
  );
};

export default Obj;
