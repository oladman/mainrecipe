import React from "react";
import { Link } from "react-router-dom";

function RecipePanel({ id, title, body, image, ingredients, recipe }) {
  return (
    <div className="post-container">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/recipe/${id}`}
      >
        <div className="top-img">
          <img src={image} />
        </div>
        <p style={{ fontWeight:'700', color:'#6C5F5B', marginLeft:'10px' }}> Fish Recipe</p>
        <div className="bottom">
          <p className="hover-hover">{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default RecipePanel;
