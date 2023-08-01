import CategoryHome from "./CategoryHome";
import CategoryExplore from "./CategoryExplore";
import CategoryCards from "./CategoryCards";
import{useEffect} from "react"

function CategoryPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <CategoryHome />
      <CategoryExplore />
      <CategoryCards />
    </>
  );
}

export default CategoryPage;
