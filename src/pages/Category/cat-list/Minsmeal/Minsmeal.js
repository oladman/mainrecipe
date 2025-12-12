import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import MinsMain from "./MinsMain"

function Minsmeal() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/minsmealimage.jpg" />
        <h1>30 MIN MEALS RECIPES</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
      In the whirlwind of our busy lives, the 30-minute meal emerges as a culinary lifesaver—an artful balance of speed and satisfaction. Picture this: a symphony of sizzling pans, the tantalizing aroma of spices, and the promise of a delicious creation in just half an hour. 
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore 3O MINS MEAL Recipes</h1>

        <MinsMain />
      </div>
    </div>
  )
}

export default Minsmeal