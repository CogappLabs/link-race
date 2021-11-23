import React, { useState } from "react";
import "./App.css";
import Path from "./components/path";
import path from "./data/single-path.json";

function App() {
  const [progress, setProgress] = useState(1);

  return (
    <div>
      <h1>Progress: {path[progress - 1].progress}%</h1>
      <Path
        path={path.slice(0, progress - 1)}
        showNeighbours={false}
        progress={progress}
        setProgress={setProgress}
      />
      <Path
        path={path.slice(progress - 1, progress)}
        showNeighbours={true}
        progress={progress}
        setProgress={setProgress}
      />
    </div>
  );
}

export default App;
