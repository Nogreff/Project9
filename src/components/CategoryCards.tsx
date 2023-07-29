import "../css/CategoryCards.css";
import RecipeCard from "./RecipeCard";
import { DataContext } from "../context/DataContext";
import { useContext,useEffect } from "react";
type RecipeInfo = {
  mealId: number;
  mealName: string;
  mealImg: string;
  mealData: string[];
};
function CategoryCards() {
  const { categoryData,link,setLink } = useContext(DataContext);

  // let recipeInfo: RecipeInfo[] = [];
  if (categoryData) {
    // console.log(categoryData.meals[0]);
  }
  useEffect(()=>{
    if(link===null){
      setLink(["Beef","https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"])
    }
  },[])
  return (
    <div className="category_cards">
      {Array.isArray(categoryData) && categoryData != null
        ? categoryData.map((value, index) => {
            return <RecipeCard mealData={{ value }} key={index} />;
          })
        : null}
    </div>
  );
}

export default CategoryCards;
