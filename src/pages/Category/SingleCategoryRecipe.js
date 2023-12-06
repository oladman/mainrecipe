import React from "react";

function SingleCategoryRecipe({ name, image }) {
  return (
    <div className="category-recipe">
      <img src={image} />
      <p>{name}</p>
    </div>
  );
}

export default SingleCategoryRecipe;
