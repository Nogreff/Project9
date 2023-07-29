import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../css/RecipeVideo.css"
function RecipeVideo() {
  const { recipeEmbedID } = useContext(DataContext);
  console.log(recipeEmbedID);
  return (
    <div className="recipe_video">
      <h2>Video</h2>
      <div className="video_wrapper">
        <iframe src={recipeEmbedID?.toString()} ></iframe>
      </div>
      
    </div>
  );
}

export default RecipeVideo;
