import React from "react";
import CartItem from "../component/CartItem";
import { useContext } from "react";
import { ShopContext } from "../context/RecipeContext";

const Cart = ({ foodData , setFoodId}) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="text-black flex flex-col items-center">
      <h1 className="text-red-700 font-bold mb-4 text-center text-4xl">Cart Item:</h1>
      <div className="">
      {foodData.map((food) => {
        if (cartItems[food.id] !== 0) {
          return <CartItem key={food.id} id={food.id} food={food} setFoodId={setFoodId}/>;
        }
      })}
      </div>
    </div>
  );
};

export default Cart;
