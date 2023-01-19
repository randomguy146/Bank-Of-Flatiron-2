import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";

function App() {
  const [getData, setGetData] = useState();

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGetData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <div className="other">
        {(getData === undefined  || getData === null) && <p>Loading...</p>}
        {getData && <Table data={getData} />}
        <Form />
      </div>
    </div>
  );
}

export default App;
