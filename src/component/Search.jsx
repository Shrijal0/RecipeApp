import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFoodItems } from "../redux/cart/cartSlice";

const Search = ({ setFoodData , q , setQ}) => {
  const dispatch= useDispatch();
  const URL = "https://dummyjson.com/recipes/search?q=";
  // const API_KEY = "d934b0404afe4cdf8a59f3281e4a0f26";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}${q}`);
        const data = await res.json();
        setFoodData(data.recipes);
        dispatch(setFoodItems(data.recipes));
        // console.log("length:",data.recipes.length)
      } catch (error) {
        console.log("error:", error);
      } finally {
        console.log("program running");
      }
    }
    fetchFood();
  }, [q]);

  return (
    <div className="w-full text-center p-5">
      <input
        value={q}
        type="text"
        onChange={(e) => setQ(e.target.value)}
        className="w-[200px] p-2 text-xl bg-white text-black outline-none border-b-2 border-b-red-300"
      />
    </div>
  );
};

export default Search;
