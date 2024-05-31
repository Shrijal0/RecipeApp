import { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setFoodItems } from "../redux/cart/cartSlice";

const FoodDetails = ({ foodId, setFoodId }) => {
  const dispatch = useDispatch();
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://dummyjson.com/recipes/${foodId}`;
  useEffect(() => {
    try {
      async function fetchFood() {
        const res = await fetch(`${URL}`);
        const data = await res.json();
        setFood(data);
        setIsLoading(false);
      }
      fetchFood();
    } catch (error) {
      console.log(error);
    }
  }, [foodId, dispatch]);
  return (
    <>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-20 w-1/3  bg-black rounded-md"
        style={{ boxShadow: "0 0 5px 1000px rgba(0, 0, 0, 0.5)" }}
      >
        <button
          className="absolute -right-4 -top-4 bg-white rounded-full text-black p-1 text-xl"
          onClick={() => setFoodId(0)}
        >
          <IoArrowBackCircleSharp />
        </button>
        <h1 className="text-center">{food.name}</h1>
        <img
          src={food.image}
          className="w-96 hover:scale-105 transform duration-200 ease-in-out  mx-auto my-3 rounded-lg shadow-xl"
          alt=""
        />
        <span className="">
          Cook Time:{food.cookTimeMinutes}min⏱️ Preperation Time:
          {food.prepTimeMinutes}min⏱️ Serveing:{food.servings}👪
        </span>
        <div>
          <div>
            <h1 className="">Ingredients:</h1>
            {isLoading ? (
              <h1 className="">Loading...</h1>
            ) : (
              food.ingredients.map((item) => (
                <li className="list-decimal" key={item}>
                  {item}
                </li>
              ))
            )}
          </div>
          <div>
            <h1 className="">Instruction:</h1>
            {isLoading ? (
              <h1 className="">Loading...</h1>
            ) : (
              food.instructions.map((step) => (
                <li className="list-decimal" key={step}>
                  {step}
                </li>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
