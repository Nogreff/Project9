import "../css/CategoryFilter.css";
import DataContext from "../context/DataContext";
import {useContext,useState,useRef, SetStateAction} from "react"
function CategoryFilter() {
  const {categoryData,setCategoryData}=useContext(DataContext)
  const [filteredData,setFilteredData]=useState<object>([])
  const [recipeEntered,setRecipeEntered]=useState<string>("")
  const focusRef=useRef() as React.MutableRefObject<HTMLInputElement>
  const recipeFilter=(recipeName:string)=>{
    setRecipeEntered(recipeName)
    if(recipeName.length>=0){
      const filteredRecipe=Object.entries(categoryData).filter((value,index)=>{
        console.log(value)
        if(recipeName.length>1){
          return value[index][1].strMeal.toLowerCase().includes(recipeName.toLowerCase())
        }else{
          return value[1].strMeal.toLowerCase().includes(recipeName.toLowerCase())
        }
      })
      if(recipeEntered===""){
        setFilteredData([])
      }else{ 
        setFilteredData(filteredRecipe.slice(0,6))
        setCategoryData(filteredRecipe) 
        console.log(filteredRecipe.slice(0,6))
        console.log(categoryData)
      }
    }
  }
  const focusSearch=inputFocus=>{
    let localFocusRef:React.MutableRefObject<HTMLInputElement>
    if(focusRef.current)localFocusRef=focusRef.current
    if(inputFocus===true){
      localFocusRef?.classList.add("focus_search")

    }else if(inputFocus===false){
      setTimeout(()=>{
        localFocusRef.value="";
        setFilteredData([])
        localFocusRef.classList.remove("focus_search")
      },100)
    }
  }
  console.log(categoryData)
  return (
    <div className="category_filter">
      <h3>sorty by name</h3>
      <div className="search_bar_container">
        <div className="search_bar">
        <input type="text" className="filter_search" ref={focusRef} onBlur={()=>focusSearch(false)} onFocus={()=>focusSearch(true)} onChange={e=>recipeFilter(e.target.value)}/>
        </div>
        <div className="search_options">
          {filteredData&& filteredData.map((value,index)=>{
            return(<a key={index}>
              {value[1].strMeal}
            </a>)
          })}
        </div>
        <button className="filter_button">X</button>
      </div>
    </div>
  );
}

export default CategoryFilter;
