import React from "react";
import CartItem from "../component/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems }= useSelector(state => state.cart);
  console.log(cartItems);

  return (
    <div className="text-black flex flex-col items-center">
      <h1 className="text-red-700 font-bold mb-4 text-center text-4xl">Cart Item:</h1>
      <div className="">
      </div>
      {
        cartItems?.map((food) => {return <CartItem  key={food.id} food={food}/>})
      }
    </div>
  );
};

export default Cart;
