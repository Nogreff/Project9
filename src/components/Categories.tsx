import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import "../css/Categories.css";
import { useNavigate } from "react-router-dom";
function Categories() {

  const navigate = useNavigate();
  const { setLink, recipeIngredients, setRecipeIngredients,categories } =
    useContext(DataContext);
  /*   useEffect(() => {
    if (recipeIngredients != null) {
      setRecipeIngredients([]);
    }
  }, [recipeIngredients]); */

  console.log(categories&& categories);
  return (
    <div className="categories">
      {categories? categories.map((value, index) => {
        const classText: string = "category_card card_" + index + "";
        return (
          <div
            className={classText}
            key={index}
            onClick={() => {
              setLink([value.categoryName,value.categoryLink]);
              navigate("categories");
            }}
          ></div>
        );
      }):null}
    </div>
  );
}

export default Categories;
