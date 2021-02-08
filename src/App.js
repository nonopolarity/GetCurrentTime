import { useEffect, useState } from "react";
import './App.css';

// Demo: 

export default function App() {
  const [data, setData] = useState({});
 const [timeSliceID, setTimeSliceID] = useState(0);
  let foo = 0;

  useEffect(() => {
    fetch("http://worldclockapi.com/api/json/pst/now")
      .then(res => res.json())
      .then(dataFetched => {
        setData(dataFetched);
      });
  }, [foo]);

  useEffect(() => {
    setInterval(() => {
      console.log("INTERVAL", timeSliceID, foo);
      // timeSliceID++;
      foo++;
      setTimeSliceID(timeSliceID + 1);
    }, 3000);
  }, []);

  return (
    <div className="App">
<pre className="data">
        {data.currentDateTime}
      </pre> 
    </div>
  );
}

export default App;
