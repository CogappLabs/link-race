import React from "react";
import nodes from "../data/nodes.json";

function urlParse(url, nodes) {
  const metadata = nodes[url];
  return [url, metadata.title, metadata.description, metadata.img];
}

const Obj = ({ url }) => {
  return <a>{url}</a>;
};

export default Obj;
