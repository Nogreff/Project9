import "../css/RecipeDirections.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function RecipeDirections() {
  const { recipeData } = useContext(DataContext);
  let directions:string[]=[]
  if(recipeData){
    directions=[...Object.values(recipeData)]
  }
  return (
    <div className="recipe_directions">
      <h2>Directions</h2>
      <p className="directions_list">
        {
          /*         {recipeData
          ? Object.entries(recipeData).map((value, index) => {
              if (value[0] === "strInstructions") {
                return (
                  <li key={index}>
                    <p>{value[1]}</p>
                  </li>
                );
              }
            })
          : null} */
          directions && directions[5]
        }
      </p>
    </div>
  );
}

export default RecipeDirections;
