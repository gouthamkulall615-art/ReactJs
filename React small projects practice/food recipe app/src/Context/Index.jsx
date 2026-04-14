import { useState } from "react";
import { GlobalContext } from "./Context";

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setfavoriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes || []);
        setLoading(false);
        setSearchParam("");
      }

      console.log(data);
    } catch {
      console.log("error occurred");
      setLoading(false);
      setSearchParam("");
    } finally {
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoriteList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id,
    );
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index,1);
    }
    setfavoriteList(cpyFavoritesList);
  }

  console.log(loading, recipes);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipes,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
