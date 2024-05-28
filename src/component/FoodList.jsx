import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId, more}) => {
  // console.log(foodData);
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center overflow-auto">
      {foodData?.slice(0, more).map((food) => (
                <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
              ))}
        
      </div>
    </div>
  );
};

export default FoodList;
