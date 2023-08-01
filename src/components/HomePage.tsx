import Home from "./Home.tsx";
import Categories from "./Categories.tsx";
import NewsLetter from "./NewsLetter.tsx";
import {useEffect} from "react"

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      <Home />
      <Categories />
      <NewsLetter />
    </>
  );
}

export default HomePage;
