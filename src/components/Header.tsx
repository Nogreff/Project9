import "../css/Header.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navMenu = useRef<HTMLElement>(null);
  const navButton=useRef<HTMLButtonElement>(null)
  function navToggle() {
    navMenu.current?.classList.toggle("show");
    navButton.current?.classList.toggle("show")
  }
  return (
    <header>
      <div
        id="logo_header"
        ref={() => {
          navMenu;
        }}
        onClick={() => navigate("/")}
      ></div>
      <button className="nav_button" ref={navButton} onClick={() => navToggle()}>
      </button>
      <nav className="nav_menu" ref={navMenu}>
        <ul className="menu_header">
          <li onClick={()=>navigate("/")}>Home</li>
          <li onClick={()=>navigate("categories")}>Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
