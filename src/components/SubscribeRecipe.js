import React from 'react'

function SubscribeRecipe() {
  return (
    <div className="subscribe-recipe">
    <div className="sub-scribe">
      <p>Subscribe</p> <p> & Stay Updated</p>
    </div>
    <div className='middle-sub'>
      <input type='text'
      placeholder='Name'
      className='input-sub-style'
      style={{ }} />

     <input type='text'
      placeholder='Email ...'
      className='input-sub-style'
      style={{  marginLeft:"10px", marginRight:'10px' }} />
      <button  className="subscribe-input">Get FREE Recipes</button>
    </div>
       
   
  </div>
  )
}

export default SubscribeRecipe