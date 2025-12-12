import React from "react";
import Recipe from "../../../Recipes/Recipe";
import Dessertpanel from "./Dessertpanel";
import DessertMain from "./DessertMain";



function Dessert() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/dessertimage.jpg" />
        <h1>DESSERT RECIPE</h1>
      </div>
      <p style={{ fontSize:"19px", lineHeight:'30px' }} className="wrapper">Indulge your sweet cravings with our Decadent Chocolate Raspberry Delight—a dessert that transforms every bite into a blissful experience. Rich layers of velvety chocolate mousse intertwine with luscious raspberry compote, creating a symphony of flavors that dance on your taste buds.</p>

      <div className="wrapper explore-desert">
        <h1>Explore Dessert Recipes</h1>

<DessertMain />
      </div>
    </div>
  );
}

export default Dessert;
