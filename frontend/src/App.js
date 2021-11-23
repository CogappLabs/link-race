import React, { useState } from "react";
import "./App.css";
import Path from "./components/path";
import path from "./data/single-path.json";

function App() {
  const [progress, setProgress] = useState(1);

  return (
    <div>
      <Path path={path.slice(0, progress - 1)} showNeighbours={false} />
      <Path path={path.slice(progress - 1, progress)} showNeighbours={true} />
    </div>
  );
}

export default App;
