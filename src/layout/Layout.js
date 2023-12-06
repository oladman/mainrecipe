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
            DINNER<span>:</span>
          </li>
          <li>
            RECIPES <span>:</span>{" "}
          </li>
          <li>
            MEALS <span>:</span>{" "}
          </li>
          <li>
            FOOD NEWS <span>:</span>{" "}
          </li>
          <li>TIPS</li>
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
            <Link to="/" style={{ textDecoration: "none" }} className="active">
              HOME
            </Link>
          </li>
          <hr className="header-line" />
          <li>DINNER</li>
          <hr className="header-line" />
          <li>RECIPES </li>
          <hr className="header-line" />
          <li>MEALS </li>
          <hr className="header-line" />
          <li>FOOD NEWS </li>
          <hr className="header-line" />
          <li>KITCHEN TIPS </li>
          <hr className="header-line" />
          <li>
           
              <Link style={{ textDecoration: "none" }} to="/post-recipe">
                ADD RECIPE
              </Link>
          
          </li>
        </ul>
      </div>
      <hr className="line-recipe" />

      <div className="wrapper">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
