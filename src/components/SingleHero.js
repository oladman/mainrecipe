import React from "react";
import { Link } from "react-router-dom";

function SingleHero({
  id,
  title,
  body,
  image,
  time,
  ingredients,
  tag,
  recipe,
}) {
  return (
   
      <div className="hero-image-container">
        <img className="hero-image-recipe" src={image} /> <br />
        <div className="hero-h3-style">
          <p
            style={{
              color: "#A3B763",
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </p>
          <Link style={{ textDecoration:'none',color:'white' }} to={`/recipe/${id}`}><h3 className="hero-title">{title}</h3> </Link> <br />
        </div>
      </div>
  
  );
}

export default SingleHero;
