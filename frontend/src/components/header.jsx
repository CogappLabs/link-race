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
        url: "?",
        title: "?",
        description: "?",
        img: "?",
      });
    }
  }
  progress_tracker.push(urlParse(path[path.length - 1].url, nodes));

  let Progress_html = () => {
    if (path[progress - 1].progress === 100) {
      return <p>You've found the path!!!</p>;
    } else {
      return <p>Progress: {path[progress - 1].progress}%</p>;
    }
  };

  return (
    <div className="header-container sticky">
      {progress_tracker.map((el) => (
        <div className="header-element">
          <img src={el.img} alt={el.title} width="30" height="30" />
          <a href={el.url} target="_blank" rel="noreferrer">
            {el.title}
          </a>
        </div>
      ))}
      <div className="header-element">
        <Progress_html />
      </div>
    </div>
  );
};

export default Header;
