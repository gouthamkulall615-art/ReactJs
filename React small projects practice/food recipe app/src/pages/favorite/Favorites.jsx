import React from "react";
import { GlobalContext } from "../../Context/Context";
import ReceipesItem from "../../components/Recipeslist/ReceipesItem";
import { useContext } from "react";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 text-white">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <ReceipesItem item={item} key={item.id} />)
      ) : (
        <div>
          <p className=" text-indigo-400 lg:text-4xl font-semibold  text-center">
            Nothing is added in favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
