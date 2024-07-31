import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiMailSendFill } from "react-icons/ri";
import ListItems from "./ListItems";
import LogOutButton from "./LogOutButton";
import { FaList } from "react-icons/fa";
import { useState } from "react";

const Nav = ({ setQ, foodData, setFoodId }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const loggedIn = localStorage.getItem("loggedIn");
  const nav = useNavigate();
  const navigate = () => {
    nav("/login");
  };

  return (
    <div className="bg-red-700 font-bold text-white p-4 sm:p-8 text-2xl sm:text-4xl w-full h-24 sm:h-32 flex items-center justify-between">
      <div className="flex-1 flex justify-center sm:justify-start">
        <Link to="/">
          <button onClick={() => setQ("")} className="text-3xl sm:text-5xl">
            🍔Recipe App
          </button>
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-10 text-xl sm:text-3xl">
        <button className="sm:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          ☰
        </button>
        <div className="hidden sm:flex gap-4 sm:gap-10">
          <Link to="/contact" className="hover:scale-110">
            <RiMailSendFill />
          </Link>
          {loggedIn ? (
            <ListItems foodData={foodData} setFoodId={setFoodId} />
          ) : (
            <button onClick={navigate}>
              <FaList />
            </button>
          )}
          <Link to="/cart" className="hover:scale-110">
            <FiShoppingCart />
          </Link>
          <LogOutButton />
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-red-700 w-64 h-full p-4 flex flex-col">
            <button className="self-end" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
            <Link to="/contact" className="hover:scale-110 mt-4" onClick={() => setSidebarOpen(false)}>
              <RiMailSendFill />
            </Link>
            {loggedIn ? (
              <ListItems foodData={foodData} setFoodId={setFoodId} />
            ) : (
              <button className="mt-4" onClick={() => { navigate(); setSidebarOpen(false); }}>
                <FaList />
              </button>
            )}
            <Link to="/cart" className="hover:scale-110 mt-4" onClick={() => setSidebarOpen(false)}>
              <FiShoppingCart />
            </Link>
            <LogOutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

