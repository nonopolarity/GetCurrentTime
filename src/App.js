import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState({});
  const [timeID, setTimeID] = useState(0);

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
      .then(res => res.json())
      .then(dataFetched => {
        setData(dataFetched);
      });
  }, [timeID]);

  useEffect(() => {
    setInterval(() => {
      console.log("INTERVAL", timeID);
      setTimeID(timeID + 1);
    }, 3000);
  }, []);

  return (
    <div className="App">
      { timeID }
      <pre className="data">
        {data.datetime}
      </pre>
    </div>
  );
}
