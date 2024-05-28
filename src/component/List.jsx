import Button2 from "./Button2";

const List = ({ recipes , setFoodId }) => {
  console.log(recipes);
  return (
    <div>
      {recipes?.map((food) => (
        <div className="flex justify-between" key={food.id}>
          <h1 className="text-[14px] hover:text-[18px]" >
            {food.name}
          </h1>
          <Button2 food={food} setFoodId={setFoodId}/>
        </div>
      ))}
    </div>
  );
};

export default List;
