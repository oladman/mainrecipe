import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Layout.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="header">
        <Link to="/" className="logo">
          <img src="recipelogo.png" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/page/dinner">Dinner</Link>
          <Link to="/page/recipe">Recipes</Link>
          <Link to="/page/meals">Meals</Link>
          <Link to="/page/news">News</Link>
          <Link to="/page/tips">Tips</Link>
        </nav>

        {/* Hamburger (Right side) */}
        <button className="hamburger" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      </header>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Mobile Slide Menu */}
      <aside className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <nav className="nav-mobile">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/page/dinner" onClick={() => setOpen(false)}>Dinner</Link>
          <Link to="/page/recipe" onClick={() => setOpen(false)}>Recipes</Link>
          <Link to="/page/meals" onClick={() => setOpen(false)}>Meals</Link>
          <Link to="/page/news" onClick={() => setOpen(false)}>Food News</Link>
          <Link to="/page/tips" onClick={() => setOpen(false)}>Kitchen Tips</Link>
          <Link to="/post-recipe" className="add-recipe" onClick={() => setOpen(false)}>
            Add Recipe
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Header;
