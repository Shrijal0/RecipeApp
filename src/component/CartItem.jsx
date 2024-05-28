import { FaRegPlusSquare , FaRegMinusSquare} from "react-icons/fa";
import { ShopContext } from "../context/RecipeContext";
import { useContext } from "react";


const CartItem = ({ food, setFoodId , id }) => {
    const { addToCart, removeFromCart, cartItems, updateCartItemCount, getTotalItem } = useContext(ShopContext);;

return (
    <>
      <div className="relative border w-[500px] rounded-lg shadow-xl flex items-center m-2 ">
        <div>
          <img src={food.image} className="h-40 rounded-lg" />
        </div>
        <h1 className="absolute text-gray-700 text-xl top-1/4 left-1/2 font-bold font-sans">
          {food.name}
        </h1>
        <div className="absolute bottom-1/4 left-1/2">
            <button onClick={()=> removeFromCart(id)}><FaRegMinusSquare/></button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} className="w-[200px] p-2 text-xl bg-white text-black outline-none border-b-2 border-b-red-300 text-center"/>
            <button onClick={()=> addToCart(id)}><FaRegPlusSquare /></button>
        </div>
      </div>
    </>
  );
};


export default CartItem;
