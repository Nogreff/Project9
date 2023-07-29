import { ReactElement, useContext } from "react";
import "../css/RecipeCard.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
type PropsType = {
  mealData: string[];
};
function RecipeCard({ mealData }: PropsType): ReactElement {
  const { setRecipeLink, setRecipeIngredients ,setRecipeEmbedID} = useContext(DataContext);
  const navigate = useNavigate();
  console.log(mealData)
  return (
    <div className="recipe_cards">
      <img src={mealData.value.strMealThumb} className="recipe_img" />
      <h4>{mealData.value.strMeal.length>20?mealData.value.strMeal.slice(0,21)+" ...":mealData.value.strMeal}</h4>
      <span className="recipe_icon"></span>
      <button
        className="recipe_button"
        onClick={() => {
          navigate("/recipe");
          setRecipeLink(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
              mealData.value.idMeal
          );
          setRecipeIngredients([]);setRecipeEmbedID(null);
        }}
      >
        Read More
      </button>
    </div>
  );
}

export default RecipeCard;
