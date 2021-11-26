import React, { useState } from "react";
import "./App.css";
import Path from "./components/path";
import Header from "./components/header";
import paths from "./data/paths.json";
const path = paths[Math.floor(Math.random() * paths.length)];

function App() {
  const [progress, setProgress] = useState(1);
  const [neighbours, setNeighbours] = useState([]);

  if (progress === path.length) {
    return (
      <div>
        <Header path={path} progress={progress} />
        <Path path={path} showNeighbours={false} />
      </div>
    );
  } else {
    return (
      <div>
        <Header path={path} progress={progress} />
        <Path
          path={path.slice(progress - 1, progress)}
          showNeighbours={true}
          progress={progress}
          setProgress={setProgress}
          neighbours={neighbours}
          setNeighbours={setNeighbours}
        />
      </div>
    );
  }
}

export default App;
