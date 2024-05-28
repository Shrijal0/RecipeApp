import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiMailSendFill } from "react-icons/ri";
import ListItems from "./ListItems";
import LogOutButton from "./LogOutButton";
import { FaList } from "react-icons/fa";

const Nav = ({ setQ, foodData, setFoodId }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const nav = useNavigate ()
  const navigate = () => {
    nav("/login")
  }

  return (
    <>
      <div className=" bg-red-700 font-bold text-white p-8 text-4xl w-full h-32 flex items-center justify-between">
        <div className="">
          <Link to="/">
            <button onClick={() => setQ("")}>🍔Recipe App</button>
          </Link>
        </div>
        <div className="flex gap-10 text-3xl">
          <Link to="/contact" className="hover:scale-110">
            <RiMailSendFill />
          </Link> 
          {loggedIn ? <ListItems foodData={foodData} setFoodId={setFoodId} /> :  <button onClick={navigate}><FaList /></button>}
          <Link to="/cart" className="text-3xl hover:scale-110">
            <FiShoppingCart />
          </Link>
         <LogOutButton /> 
        </div>
      </div>
    </>
  );
};

export default Nav;
