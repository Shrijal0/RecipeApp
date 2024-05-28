import { IoInformationCircleSharp } from "react-icons/io5";

const Button2 = ({ food, setFoodId }) => {
  return (
    <div className="text-white text-3xl hover:text-4xl">
      <button
        onClick={() => {
          setFoodId(food.id);
        }}
      >
        <IoInformationCircleSharp />
      </button>
    </div>
  );
};

export default Button2;