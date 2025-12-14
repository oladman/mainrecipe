import React from "react";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

function RecipePanel({
  id,
  title,
  body,
  image,
  time,
  tag,
  ingredients,
  recipe,
}) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/recipe/${id}`}
      className="parent-post-container"
    >
      <div className="top-img">
        <img src={image} alt={title} />
      </div>

      <div className="bottom-post-container">
        {tag && <p className="bottom-post-tag">{tag}</p>}

        <p className="hover-hover">{title}</p>
        <p className="time-style">
          <IoMdTime /> {time}
        </p>
      </div>
    </Link>
  );
}

export default RecipePanel;
