import axios from "axios";
import React, { useState } from "react";

const App = () => {
  //  async function getData(){
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );

  //   const data = await response.json();
  //   console.log(data);
  // };

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   console.log(data);
  // };
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data)
    
  };
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function (ele, idx) {
          return <h3>{ele.author}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
