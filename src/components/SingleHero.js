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
    <Link
      style={{ textDecoration: "none", color: "white" }}
      className="hero-image-container"
      to={`/recipe/${id}`}
    >
      <img className="hero-image-recipe" src={image} alt={title} />
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
        <h3 className="hero-title">{title}</h3>
      </div>
    </Link>
  );
}

export default SingleHero;
