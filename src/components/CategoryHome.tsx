import "../css/CategoryHome.css";
import {useContext} from "react"
import DataContext from "../context/DataContext";
function CategoryHome() {
  const {link}=useContext(DataContext)
  console.log(link)
  return (
    <div className="category_home">
      <div className="category_home_wrapper">
        <h1>Recipes</h1>
        <h2>{link && link[0]}</h2>
      </div>
    </div>
  );
}

export default CategoryHome;
