import React from "react";
import FoodList from "../component/FoodList";
import Search from "../component/Search";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const Home = ({
  foodData,
  setFoodId,
  foodId,
  q,
  setQ,
  setFoodData,
  more,
  setMore,
}) => {
  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData} q={q} setQ={setQ} />
        <FoodList
          foodData={foodData}
          setFoodId={setFoodId}
          more={more}
          setMore={setMore}
          foodId={foodId} sw
        />
    <div className=" flex flex-col w-full items-center pb-2">
        {more === 30 ? (
          <button
            className="text-white text-center bg-red-400 p-1 rounded-full"
            onClick={() => setMore(10)}
          >
            <MdExpandLess />
          </button>
        ) : (
          <button
            className="text-white text-center bg-red-400 p-1 rounded-full"
            onClick={() => setMore(foodData.length)}
          >
            <MdExpandMore />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
