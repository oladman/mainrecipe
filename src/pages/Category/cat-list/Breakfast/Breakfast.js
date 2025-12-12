import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import BreakfastMain from './BreakfastMain';
function Breakfast() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/breakfastimage.jpg" />
        <h1>BREAKFAST RECIPES</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
      This breakfast recipe is a celebration of freshness and flavor, carefully crafted to kickstart your day with a burst of energy. 
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore Breakfast Recipes</h1>

        <BreakfastMain />
      </div>
    </div>
  )
}

export default Breakfast