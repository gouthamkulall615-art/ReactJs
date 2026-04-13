import { useState } from "react";
import { GlobalContext } from "./Context";

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      setRecipes(data?.data?.recipes || []);
    } catch {
      console.log("error occurred");
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipes }}
    >
      {children}
    </GlobalContext.Provider>
  );
}