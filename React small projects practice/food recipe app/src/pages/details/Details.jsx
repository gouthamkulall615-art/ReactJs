import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

const Details = () => {
  const { id } = useParams();

  const {
    recipeDetailsData,
    favoriteList,
    setRecipeDetailsData,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
        );
        const data = await response.json();

        if (data?.data) {
          setRecipeDetailsData(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (id) getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  if (!recipeDetailsData?.recipe) {
    return (
      <div className="text-white text-center py-10 text-lg">Loading...</div>
    );
  }

  const recipe = recipeDetailsData.recipe;

  return (
    <div className="container mx-auto py-10 px-4 text-white">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-4 lg:w-1/2">
          <span className="bg-slate-700 text-white font-medium rounded px-3 py-1 w-fit">
            {recipe.publisher}
          </span>

          <h2 className="text-2xl lg:text-3xl font-bold text-indigo-400 leading-snug">
            {recipe.title}
          </h2>
          <div>
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
              className="bg-white text-indigo-500 p-3 rounded-2xl font-medium cursor-pointer text-center hover:bg-indigo-500 hover:text-white duration-300 active:scale-95"
            >
              {favoriteList &&
              favoriteList.length > 0 &&
              favoriteList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id,
              ) !== -1
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
          <div>
            <span className="text-3xl font-semibold text-white  ">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3 mt-6 text-slate-300 ">
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span>
                    {ingredient.quantity} {""}
                    {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
