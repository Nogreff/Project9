import "../css/CategoryCards.css";
import RecipeCard from "./RecipeCard";
import { DataContext } from "../context/DataContext";
import { useContext,useEffect } from "react";

function CategoryCards() {
  const { categoryData,link,setLink } = useContext(DataContext);
  useEffect(()=>{
    if(link===null){
      setLink(["Beef","https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"])
    }
  },[])
  return (
    <div className="category_cards">
      {Array.isArray(categoryData) && categoryData != null
        ? Object.values(categoryData).map((value, index) => {
            const data:string[] =[value]
            console.log(...data)
            return <RecipeCard mealData={data} key={index} />;
          })
        : null}
    </div>
  );
}

export default CategoryCards;
