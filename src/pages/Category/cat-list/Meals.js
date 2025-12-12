import React from 'react'
import Recipe from "../../Recipes/Recipe";

function Meals() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/allmealsimage.jpg" />
        <h1>MEALS </h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
        Don't get stuck in a dinner rut. Whether you're looking for a new twist
        on baked chicken, an easy pasta to make on repeat, or a one-pot recipe,
        we've got all the fun dinner ideas you could ever need.
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore  Meals Recipes</h1>

        <Recipe />
      </div>
    </div>
  )
}

export default Meals