import React from 'react'
import Recipe from "../../Recipes/Recipe";
function Allrecipe() {
  return (
    <div className="cover-dessert">
    <div className="desert-img-box">
      <img className="desert-img-style" src="/allrecipeimage.jpg" />
      <h1>ALL RECIPES</h1>
    </div>
    <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
    Recipes are the alchemical blueprints that transform ordinary ingredients into extraordinary culinary experiences. They are the storytellers of kitchens, guiding us through a journey of flavors, techniques, and creativity.More than just a list of instructions, recipes are a form of art—a harmonious blend of precise measurements and the freedom to improvise.
    </p>

    <div className="wrapper explore-desert">
      <h1>Explore  All Recipes</h1>

      <Recipe />
    </div>
  </div>
  )
}

export default Allrecipe