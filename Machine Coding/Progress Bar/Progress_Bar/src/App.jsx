import { useEffect, useState } from "react";
import "./App.css";



const ProgressBar = ({ progress }) => {

  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setProgressWidth(progress), 500)
  },[progressWidth])
  return (
    <div
      style={{
        transform:  `translateX(${progressWidth-100}%)`,
        backgroundColor: "red",
        textAlign: "end",
        color: `${progressWidth>5 ? "white" : "black"}`,
        transition: "2s ease-in"
      }}
    >
      {progressWidth}%
    </div>
  );
};
function App() {
  const bars = [5, 10, 20, 40, 80, 100];
  return (
    <>
      <div className="outer">
        {bars.map((val) => (
          <div className="inner" key={val} >
            <ProgressBar progress={val} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
