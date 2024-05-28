import React, { useState } from "react";
import Button from "./Button";
import CartButton from "./CartButton";

const FoodItem = ({ food, setFoodId }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <div className="border w-80 rounded-lg shadow-xl m-5 p-5">
        <div
          className="relative"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div>
            <img
              src={food.image}
              className="w-72 hover:scale-105 hover:opacity-50 transform duration-200 ease-in-out  mx-auto my-3 rounded-lg shadow-xl"
            />
            {onHover && (
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            )}
          </div>
          {onHover && <Button food={food} setFoodId={setFoodId} />}
          {onHover && <CartButton id={food.id} />}
        </div>
        <div className="h-[60px]">
          <h1 className="text-gray-700 text-xl font-bold text-center font-sans">
            {food.name}
          </h1>
        </div>
        <div className="text-black flex justify-evenly px-5 text-center">
          Tags:
          {food.tags.slice(0, 2).map((tags, id) => (
            <h1
              key={id}
              className="bg-red-700 text-white px-2 rounded-2xl hover:opacity-50"
            >
              {tags}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
