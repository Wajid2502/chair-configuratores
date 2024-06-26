import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#213547"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
