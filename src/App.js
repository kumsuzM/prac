import Tree from "./Tree.jsx";
import { useState, useEffect } from "react";
import { fetchFn } from "./clientApi";

function App() {
  const currDate = new Date();
  const [data, setData] = useState();

  useEffect(() => {
    const requestData = async () => {
      const apiData = await fetchFn();
      console.log(apiData);
      setData(apiData);
    };
    requestData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Date: {currDate.toLocaleString()}</h1>
        <Tree data={data} />
      </div>
    </div>
  );
}

export default App;
