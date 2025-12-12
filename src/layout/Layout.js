import React, { useState } from "react";
import "./Layout.css";
import { BsLightningCharge } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { BsBookmarkHeart } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { FaHamburger } from "react-icons/fa";

function Layout() {
  const [open, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <div className="Header">
        <div
          className="Hamburger"
          onClick={toggleMenu}
          style={{ fontSize: "20px" }}
        >
          <FaHamburger />
        </div>

        <Link to="/">
          <img src="recipelogo.png" alt="logo" className="logo" />
        </Link>
        <ul className="ul-layout">
          <li>
            <Link to="/" style={{ textDecoration: "none" }} className="active">
              HOME
            </Link>{" "}
            <span>:</span>
          </li>
          <li>
          <Link to="/page/dinner" style={{ textDecoration: "none", color:"black" }}>DINNER <span>:</span> </Link>
          </li>
          
          <li>
          
          <Link to="/page/recipe" style={{ textDecoration: "none", color:"black" }}>RECIPES <span>:</span> </Link>
          </li>
          
          <li>
          <Link to="/page/meals" style={{ textDecoration: "none", color:"black" }}>MEALS <span>:</span> </Link>
          </li>
          <li>
          <Link to="/page/news" style={{ textDecoration: "none", color:"black" }}>NEWS <span>:</span> </Link>
          </li>
          <li>
          <Link to="/page/tips" style={{ textDecoration: "none", color:"black" }}>TIPS <span>:</span> </Link>
          </li>
          <BsLightningCharge style={{ color: "grey" }} />
          <HiSearch style={{ color: "grey" }} />
          <FiShare2 style={{ color: "grey" }} />
          <BsBookmarkHeart style={{ color: "grey" }} />
        </ul>

        <ul
          className={`ul-layout-mobile  ${open ? "is-open" : ""}`}
          onClick={toggleMenu}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color:"black" }} className="active">
              HOME
            </Link>
          </li>
          <hr className="header-line" />
          <Link to="/page/dinner" style={{ textDecoration: "none", color:"black" }}><li>DINNER</li> </Link>
          <hr className="header-line" />
          <Link to="/page/recipe" style={{ textDecoration: "none", color:"black" }}><li>RECIPES</li> </Link>
          <hr className="header-line" />
          <Link to="/page/meals" style={{ textDecoration: "none", color:"black" }}><li>MEALS</li> </Link>
          <hr className="header-line" />
          <Link to="/page/news" style={{ textDecoration: "none", color:"black" }}><li>FOOD NEWS</li> </Link>
          <hr className="header-line" />
          <Link to="/page/tips" style={{ textDecoration: "none", color:"black" }}><li>KITCHEN TIPS</li> </Link>
          <hr className="header-line" />
          <li>
           
              <Link style={{ textDecoration: "none" }} to="/post-recipe">
                ADD RECIPE
              </Link>
          
          </li>
        </ul>
      </div>
      <hr className="line-recipe" />

      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
