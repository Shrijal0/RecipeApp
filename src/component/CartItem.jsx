import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { ShopContext } from "../context/RecipeContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
  updateCartItem,
} from "../redux/cart/cartSlice";

const CartItem = ({ food }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const obj = {
      id: food.id,
      quantity: e.target.value,
    };

    dispatch(updateCartItem(obj));
  };

  console.log(food);

  return (
    <>
      <div className="relative border w-[500px] rounded-lg shadow-xl flex items-center m-2 ">
        <div>
          <img src={food.image} className="h-40 rounded-lg" />
        </div>
        <h1 className="absolute text-gray-700 text-xl top-1/4 left-1/2 font-bold font-sans">
          {food.name}
        </h1>
        <button
          className="absolute top-1 right-1"
          onClick={() => dispatch(deleteFromCart(food.id))}
        >
          <MdOutlineCancel />
        </button>
        <div className="absolute bottom-1/4 left-1/2">
          <button onClick={() => dispatch(removeFromCart(food.id))}>
            <FaRegMinusSquare />
          </button>
          <input
            value={food.quantity}
            onChange={handleChange}
            className="w-[200px] p-2 text-xl bg-white text-black outline-none border-b-2 border-b-red-300 text-center"
          />
          <button onClick={() => dispatch(addToCart(food.id))}>
            <FaRegPlusSquare />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
