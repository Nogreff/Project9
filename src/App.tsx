import Header from "./components/Header.tsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage.tsx";
import CategoryPage from "./components/CategoryPage.tsx";
import Recipe from "./components/Recipe.tsx";
import { DataProvider } from "./context/DataContext.tsx";

function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <DataProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
