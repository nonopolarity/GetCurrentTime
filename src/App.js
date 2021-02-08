import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState({});
  const [timeID, setTimeID] = useState(0);
// let foo =0;

  useEffect(() => {
    console.log("FETCHING");
    fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
      .then(res => res.json())
      .then(dataFetched => {
        setData(dataFetched);
      });
  }, [timeID]);

  useEffect(() => {
    setInterval(() => {
      console.log("INTERVAL", timeID);
      // foo++;
      setTimeID(t => t + 1);
    }, 3000);
  });

  const getLocalTime = (s) => {
    const date = new Date(Date.parse(s));
    return date.toLocaleTimeString('en-US')
  }

  return (
    <div className="App">
      { timeID }
      <pre className="data">
        {/* {data.datetime} */}
        {getLocalTime(data.datetime)}
      </pre>
    </div>
  );
}
