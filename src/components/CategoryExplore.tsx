import DataContext from "../context/DataContext"
import {useContext} from "react"
import "../css/CategoryExplore.css"

function CategoryExplore() {
  const {categories,setLink}=useContext(DataContext)
  return (
    <div className="category_explore">
        <h2>Explore our categories</h2>
        <ul className="category_list">{categories?categories.map((value,index)=>{
        return<li key={index} onClick={()=>setLink([value.categoryName,value.categoryLink])}>{value.categoryName}</li>
    }):null}</ul>
    </div>
  )
}

export default CategoryExplore