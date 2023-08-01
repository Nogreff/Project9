import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../css/RecipeDirections.css";

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
        {directions && directions[5]}
      </p>
    </div>
  );
}

export default RecipeDirections;
