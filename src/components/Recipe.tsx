import RecipeMain from "./RecipeMain";
import RecipeIngredients from "./RecipeIngredients";
import RecipeDirections from "./RecipeDirections";
import RecipeVideo from "./RecipeVideo";
import { useEffect } from "react";
import "../css/Recipe.css"

function Recipe() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div className="recipe">
      <RecipeMain />
      <RecipeIngredients />
      <RecipeDirections />
      <RecipeVideo />
    </div>
  );
}

export default Recipe;
