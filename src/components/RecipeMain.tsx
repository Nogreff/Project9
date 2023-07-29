import "../css/RecipeMain.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
function RecipeMain() {
  const { recipeData } = useContext(DataContext);
  return recipeData ? (
    <div className="recipe_main">
      <h1>{recipeData.strMeal}</h1>
      <img src={recipeData.strMealThumb} className="recipe_img" />
    </div>
  ) : null;
}

export default RecipeMain;
