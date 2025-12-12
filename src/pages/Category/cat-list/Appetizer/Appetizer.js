import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import AppetizerMain from "./AppetizerMain"

function Appetizer() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/appetizerimage.jpg" />
        <h1>APPETIZER RECIPES</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
      Dive into a world of culinary anticipation with our delectable appetizer selection. From the crisp crunch of golden spring rolls to the creamy indulgence of spinach and artichoke dip, our appetizers are crafted to tantalize your taste buds and ignite your appetite.
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore  Appetizer Recipes</h1>

        <AppetizerMain />
      </div>
    </div>
  )
}

export default Appetizer