import { FaCartPlus } from "react-icons/fa";
import { ShopContext } from "../context/RecipeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";

const CartButton = ({ id }) => {
  const { cartItems } = useContext(ShopContext);
  const dispatch = useDispatch();
  const cartItemAmount = cartItems[id]; 

  const loggedIn = localStorage.getItem("loggedIn")
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <div className="relativetext-white text-3xl hover:text-4xl text-center top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 absolute">
      <div className="relative p-4">
        <div className="absolute right-0 top-0 pointer-events-none font-bold text-red-600 text-[20px]">
          {cartItemAmount > 0 && <>{cartItemAmount}</>}
        </div>
        {loggedIn ? <button onClick={() => dispatch(addToCart(id))}>
          <FaCartPlus />
        </button> : <button onClick={handlelogin}>
          <FaCartPlus />
        </button>}
      </div>
    </div>
  );
};

export default CartButton;
