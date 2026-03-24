import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const repsonse = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(repsonse.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printuserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  );
  if (userData.length > 0) {
    printuserData = userData.map(function (ele, idx) {
      return (
        <div key={idx}>
          <a href={ele.url} target="_blank">
            <div className="w-full aspect-[3/4] overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover "
                src={ele.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg ">{ele.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white">
      <div className=" m-3 py-2 bg-amber-300 rounded ">
        <h3 className="text-xl px-1 py-3 ml-2 bg-black w-24 rounded text-white font-semibold text-center
        ">Picframe</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">{printuserData}</div>
      <div className="flex gap-4 justify-center items-center p-4">
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
               setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4 className="px-4 py-2 rounded bg-gray-800 font-bold text-white">Page {index}</h4>
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95"
          onClick={() => {
             setUserData([])
            setIndex(index + 1);
           
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;