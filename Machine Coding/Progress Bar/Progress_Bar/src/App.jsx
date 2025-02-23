import { useState, useEffect } from "react";
import "./App.css";

export const ProgressBar = ({ progress }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const barStyles = {
    transform: `translate(${progressWidth - 100}%`,
    backgroundColor: "blue",
    color: `${progressWidth < 6 ? "black" : "white"}`,
    transition: "2s ease-in",
  };

  useEffect(() => {
    setTimeout(() => setProgressWidth(progress), 500);
  }, [progressWidth]);

  return (
    <div className="outer">
      <div
        className="inner"
        aria-valuenow={progressWidth}
        aria-valuemax={100}
        aria-valuemin={0}
        style={barStyles}
      >
        {progressWidth}%
      </div>
    </div>
  );
};

function App() {
  const bars = [5, 10, 20, 40, 80, 100];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Progress bar testing</h1>
      {bars.map((val) => (
        <ProgressBar key={val} progress={val} />
      ))}
    </>
  );
}

export default App;
