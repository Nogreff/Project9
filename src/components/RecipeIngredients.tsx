import {  useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import "../css/RecipeIngredients.css";

function RecipeIngredients() {
  const { recipeIngredients } = useContext(DataContext);
  const [recipeCatcher, setRecipeCatcher] = useState<string[][]>([]);
  useEffect(() => {
    if (
      recipeIngredients &&
      recipeIngredients.length > 0 &&
      recipeCatcher.length === 0
    ) {
      setRecipeCatcher([...recipeIngredients]);
    }
  }, [recipeIngredients, recipeCatcher]);
  return (
    <div className="recipe_ingredients">
      <h2>Ingredients</h2>
      <ul className="ingredients_list">
        {recipeIngredients && recipeCatcher != null
          ? recipeCatcher.map((value, index) => {
              console.log(value);
              return (
                <li key={index}>
                  <b>{value[0]}&nbsp;</b>
                  {value[1]}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default RecipeIngredients;
