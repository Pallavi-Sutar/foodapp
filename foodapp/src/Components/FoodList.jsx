import FoodItem from "./FoodItem"
export default function FoodList({foodData,setFoodId})
{
    return(
        <div>
             {foodData && foodData.map((food)=>
     (
     //   <FoodItem key={food.id} food={food} />
        <FoodItem setFoodId={setFoodId} food={food}/>
        
     ))}
     
            {/* {foodData.map((food)=>
            {
                <FoodItem food={food}/>
            })} */}

        </div>
    )
}