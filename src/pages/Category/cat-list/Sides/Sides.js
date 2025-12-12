import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import SidesMain from "./SidesMain"

function Sides() {
  return (
    <div className="cover-dessert">
    <div className="desert-img-box">
      <img className="desert-img-style" src="/sidesimage.jpg" />
      <h1>SIDES RECIPES</h1>
    </div>
    <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
    Elevate your dining experience with our exquisite array of side dishes, each meticulously crafted to complement and enhance the flavors of your main course. From the comforting warmth of garlic-infused mashed potatoes to the vibrant medley of roasted seasonal vegetables, our sides are more than accompaniments—they're culinary companions that elevate your meal to new heights.
    </p>

    <div className="wrapper explore-desert">
      <h1>Explore  Sides Recipes</h1>

      <SidesMain />
    </div>
  </div>
  )
}

export default Sides