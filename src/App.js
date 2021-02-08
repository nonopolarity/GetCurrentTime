import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
      .then(res => res.json())
      .then(dataFetched => {
        setData(dataFetched);
      });
  }, []);

  return (
    <div className="App">
      <pre className="data">
        {JSON.stringify(data, null, 4)}
      </pre> 
    </div>
  );
}
