import { IoInformationCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Button = ({ food, setFoodId }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  const handleloggin = () => {
    navigate("/login");
  };

  return (
    <div className="text-white text-3xl hover:text-4xl text-center top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 absolute">
      {loggedIn ? (
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          <IoInformationCircleSharp />
        </button>
      ) : (
        <button onClick={handleloggin}>
          <IoInformationCircleSharp />
        </button>
      )}
    </div>
  );
};

export default Button;
