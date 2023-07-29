import "../css/RecipeMain.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
function RecipeMain() {
  const { recipeData } = useContext(DataContext);
  let recipe:string[]=[]
  if(recipeData){
    recipe=[...Object.values(recipeData)]
    console.log(recipe)
  }
  return recipe!=null ? (
    <div className="recipe_main">
      <h1>{recipe[1]}</h1>
      <img src={recipe[6]} className="recipe_img" />
    </div>
  ) : null;
}

export default RecipeMain;
