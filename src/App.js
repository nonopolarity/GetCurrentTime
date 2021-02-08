import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://worldclockapi.com/api/json/pst/now")
      .then(res => res.json())
      .then(dataFetched => {
        setData(dataFetched);
      });
  }, []);

  return (
    <div className="App">
      <pre className="data">
        {data.currentDateTime}
      </pre> 
    </div>
  );
}
