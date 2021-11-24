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

const Header = ({ path, progress }) => {
  const progress_tracker = [];
  for (let i = 0; i < path.length - 1; i++) {
    if (i < progress) {
      progress_tracker.push(urlParse(path[i].url, nodes));
    } else {
      progress_tracker.push({
        url: null,
        title: "?",
        description: null,
        img: null,
      });
    }
  }
  progress_tracker.push(urlParse(path[path.length - 1].url, nodes));

  let ProgressHTML = () => {
    if (path[progress - 1].progress === 100) {
      return <p>You've found the path!!!</p>;
    } else {
      return <p>Progress: {path[progress - 1].progress}%</p>;
    }
  };

  return (
    <div className="header-container sticky">
      {progress_tracker.map((el, index) => (
        <div key={index} className="header-element">
          <img src={el.img} alt={el.url} width="50" height="50" />
          <a href={el.url} target="_blank" rel="noreferrer">
            {el.title}
          </a>
        </div>
      ))}
      <div className="header-element">
        <ProgressHTML />
      </div>
    </div>
  );
};

export default Header;
