import React from "react";
import { Link } from "react-router-dom";

const ReceipesItem = ({ item }) => {
  return (
    <div
      className="flex flex-col w-80 overflow-hidden p-4 bg-slate-800 
                shadow-sm rounded-2xl gap-5
                transition duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)"
    >
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className=" block w-full h-full object-cover
      "
        />
      </div>
      <div className=" p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold  line-clamp-2">{item?.title}</h2>
        <p className="text-indigo-400">{item?.publisher}</p>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-gray-400 text-lg text-center hover:text-white"
        >
          Recipe Detials
        </Link>
      </div>
    </div>
  );
};

export default ReceipesItem;
