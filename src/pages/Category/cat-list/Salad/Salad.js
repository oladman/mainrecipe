import React from "react";
import Recipe from "../../../Recipes/Recipe";
import SaladMain from "./SaladMain";

function Salad() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/saladimage.jpg" />
        <h1>SALAD RECIPE'S</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
        Elevate your well-being with the simple delight of a crisp, colorful
        salad. Packed with vitamins, minerals, and antioxidants, salads offer a
        delicious gateway to nourishing your body. From leafy greens to vibrant
        veggies, each bite is a celebration of health and vitality. Fuel your
        day with the goodness of nature, as a salad isn't just a meal; it's a
        commitment to self-care. Embrace the refreshing crunch, relish the
        natural flavors, and savor the feeling of nourishment. Your body will
        thank you for this vibrant, wholesome choice!
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore Salad Recipes</h1>

        <SaladMain />
      </div>
    </div>
  );
}

export default Salad;
