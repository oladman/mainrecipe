import React from "react";

function SingleHero({ img, title }) {
  return (
    <div className="hero-image-container">
      <img className="hero-image-recipe" src={img} /> <br/>
      <div className="hero-h3-style">
        <p style={{ color:'#A3B763', fontSize:'12px', fontWeight:'700' }}>HEALTH</p>
      <h3>{title}</h3> <br />
        
      </div>
    
    </div>
  );
}

export default SingleHero;
