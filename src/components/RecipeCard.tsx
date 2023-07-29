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
  let meal:string[][]|null=[]
  if(mealData){
    meal=[Object.values(mealData[0])]
    console.log(meal)
  }
  return (
    meal?
    <div className="recipe_cards">
      <img src={meal[0][1]} className="recipe_img" />
      <h4>{meal[0][0].length>20?meal[0][0].slice(0,21)+" ...":meal[0][0]}</h4>
      <span className="recipe_icon"></span>
      <button
        className="recipe_button"
        onClick={() => {
          navigate("/recipe");
          setRecipeLink(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
              meal![0][2]
          );
          setRecipeIngredients([]);setRecipeEmbedID(null);
        }}
      >
        Read More
      </button>
    </div>
    :<></>
  );
  
}

export default RecipeCard;
