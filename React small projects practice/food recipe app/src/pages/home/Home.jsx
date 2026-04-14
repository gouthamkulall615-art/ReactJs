import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import ReceipesItem from "../../components/Recipeslist/ReceipesItem";

const Home = () => {
  const { recipes, loading } = useContext(GlobalContext);
  if (loading) {
    return <div> loading please wait</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 text-white">
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => <ReceipesItem item={item}  key={item.id}  />)
      ) : (
        <div>
          <p className=" text-indigo-400 lg:text-4xl font-semibold  text-center">
            Nothing to show please search the items
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
