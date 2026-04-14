import { useState } from "react";
import { GlobalContext } from "./Context";

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

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
    }
  }
  console.log(loading, recipes);

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipes, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
