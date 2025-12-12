import React from 'react'
import SingleHero from './SingleHero'
import HerorecipePanel from './HerorecipePanel'

function HeroRecipe() {
  return (
    <div className="hero-recipe">
        <h2>WHAT WE'RE CRAVING</h2>
    <div>
      <div>
       <HerorecipePanel className='hero-label' />
      </div>
      <div>

      </div>
    </div>
  </div>
  )
}

export default HeroRecipe