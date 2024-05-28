import { FaList } from "react-icons/fa";
import React, { useState } from "react";
import DifficultyModal from "./DifficultyModal";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ListItems = ({ foodData, setFoodId }) => {
  const [isModalHidden, setIsModalHidden] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isHidden, setIsEasyHidden] = useState(false);

  const handleButtonClick = () => {
    if (isHidden == false) {
      setIsModalHidden(!isModalHidden);
    } else {
      setIsEasyHidden(isModalHidden);
    }
  };

  const handleEasyRecipes = () => {
    const easyRecipesArr = foodData?.filter(
      (food) => food.difficulty === "Easy"
    );
    setRecipes(easyRecipesArr);
    setIsEasyHidden(true);
  };

  const handleMediumRecipes = () => {
    const mediumRecipesArr = foodData?.filter(
      (food) => food.difficulty === "Medium"
    );
    setRecipes(mediumRecipesArr);
    setIsEasyHidden(true);
  };

  return (
    <div className="relative">
      <button className="hover:scale-110" onClick={() => handleButtonClick()}>
        {isModalHidden ? <IoArrowBackCircleSharp className="rotate-180"/> : <FaList />}
      </button>
      {isModalHidden && (
        <div className="z-10 w-50 absolute top-14 right-[-0.5rem] text-xl bg-red-600  p-5 rounded-md ">
          <div className="flex flex-col justify-between ">
            <h1 className="text-[30px] pb-5">Cooking Difficulty:</h1>
            <button
              onClick={() => handleEasyRecipes()}
              className="flex items-center text-[20px] hover:text-[24px]  text-white rounded justify-center"
            >
              <IoArrowBackCircleSharp className="mr-2" />
              Easy
            </button>
            <br />
            <button
              onClick={() => handleMediumRecipes()}
              className="flex items-center text-[20px] hover:text-[24px] text-white0 rounded justify-center"
            >
              <IoArrowBackCircleSharp className="mr-2" />
              Medium
            </button>
          </div>
        </div>
      )}
      {isHidden && (
        <DifficultyModal
          recipes={recipes}
          setIsEasyHidden={setIsEasyHidden}
          isHidden={isHidden}
          setFoodId={setFoodId}
        />
      )}
    </div>
  );
};

export default ListItems;
