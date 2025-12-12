import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import MaincourseMain from "./MaincourseMain"

function Maincourse() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/maincourseimage.jpg" />
        <h1>MAIN COURSE RECIPES</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
      Embark on a gastronomic voyage with our captivating main course offerings, where every dish is a masterpiece in flavor and presentation. From succulent grilled meats to exquisite pasta creations, each main course is a celebration of culinary craftsmanship and palate-pleasing ingenuity.
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore  Main course Recipes</h1>

        <MaincourseMain/>
      </div>
    </div>
  )
}

export default Maincourse