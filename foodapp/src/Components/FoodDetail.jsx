import { useState, useEffect } from "react";
import styles from './Fooddetail.css';
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFoodData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "87efb69cc91d443f95f7204c6b99df54";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img className={styles.recipeImage} src={food.image} alt="" />
      <div className={styles.recipedetails}> 
        <span>
          <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>Serves {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "Vegetarian" : "Non-vegetarian"}</span>
        <span>{food.vegan ? "Vegan" : ""}</span>
      </div>
      <div>
        <span>${food.pricePerServing / 100} Per Serving</span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading}/>     
      <div className={styles.recipeInstructions}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {food.analyzedInstructions && food.analyzedInstructions.length > 0 && (
              <div>
                <ul className={styles.receipeInstructionol}>
                  {food.analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
