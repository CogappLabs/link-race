import "./App.css";
import Path from "./components/path";
import path from "./data/single-path.json";

function App() {
  return (
    <div>
      <Path path={path} />
    </div>
  );
}

export default App;
