import React from 'react'
import SingleHero from './SingleHero'

function HeroRecipe() {
  return (
    <div className="hero-recipe">
        <h2>WHAT WE'RE CRAVING</h2>
    <div className="hero-recipe-container">
      <div>
        <SingleHero className='hero-label' img="recipe1.jpg" title="Simple Beef Stroganoff" />
      </div>
      <div>
        <SingleHero className='hero-label' img="recipe2.jpg" title="Oven Fried Chicken" />
      </div>
      <div>
        <SingleHero className='hero-label' img="recipe3.jpg" title="Million Dollar Spaghetti" />
      </div>
    </div>
  </div>
  )
}

export default HeroRecipe