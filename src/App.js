import "./App.css";
import { useRef, useEffect } from 'react';
import Home from "./Home";
import { initializeFluidSimulation } from './fluidSimulation'; // Import the fluid simulation

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    initializeFluidSimulation(canvas);

  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
      <Home />
    </div>
  );
}
