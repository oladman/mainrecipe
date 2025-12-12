import React from 'react'
import Recipe from "../../../Recipes/Recipe";
import SoupMain from './SoupMain';

function Soup() {
  return (
    <div className="cover-dessert">
      <div className="desert-img-box">
        <img className="desert-img-style" src="/soupimage.jpg" />
        <h1>SOUP RECIPES</h1>
      </div>
      <p style={{ fontSize: "19px", lineHeight: "30px" }} className="wrapper">
      In the heart of winter or on a cool, drizzly day, there's nothing quite as comforting and soul-soothing as a steaming bowl of soup. From hearty stews that warm you from the inside out to delicate broths that whisper of simplicity, soup is a culinary hug for the senses. 
      </p>

      <div className="wrapper explore-desert">
        <h1>Explore soup Recipes</h1>

        <SoupMain />
      </div>
    </div>
  )
}

export default Soup