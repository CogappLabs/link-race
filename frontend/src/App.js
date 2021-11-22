import React, { useState } from "react";
import "./App.css";
import Path from "./components/path";
import path from "./data/single-path.json";

function App() {
  const [progress, setProgress] = useState(1);

  return (
    <div>
      <Path path={path.slice(0, progress)} />
    </div>
  );
}

export default App;
