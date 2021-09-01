import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";

// const data = [
//   { param: "Admin", val: "0.03" },
//   { param: "Margin", val: "0.4" },
//   { param: "Price", val: "5080" }
// ];

const comonscol = [
  { title: "Parameters", field: "name" },
  { title: "Value", field: "year" }
];

function App() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div className="App">
      <Table col={comonscol} data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
