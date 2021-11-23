import React, { useState } from "react";
import "./App.css";
import Path from "./components/path";
import Header from "./components/header";
import path from "./data/single-path.json";

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
        <Path path={path.slice(0, progress - 1)} showNeighbours={false} />
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
