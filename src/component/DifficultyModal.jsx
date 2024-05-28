import React from "react";
import List from "./List";
import { IoArrowBackCircleSharp } from "react-icons/io5"
const DifficultyModal = ({ recipes, setIsEasyHidden, isHidden ,setFoodId}) => {

  return (
    <div className="z-10 w-72 h-96 overflow-y-scroll absolute top-24 right-[11rem] text-xl bg-red-600  p-5 rounded-md">
      <button onClick={()=>setIsEasyHidden(!isHidden)}>
        <IoArrowBackCircleSharp className="rotate-180"/>
        </button>
      <List recipes={recipes} setFoodId={setFoodId}/>
    </div>
  );
};

export default DifficultyModal;
