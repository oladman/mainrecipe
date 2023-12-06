import React from 'react'
import { Link } from 'react-router-dom'


function Hotpanel({id, title, body, image, ingredients, description}) {
  return (
    <Link
    style={{ textDecoration: "none", color: "black" }}
    to={`/recipe/${id}`}
  > <div className="hot-trending">
    <div className="top-hot"><img  className="hot-img" src={image} /></div>
    <div className="hot-text">
    <h1>
     {title}
    </h1>
    <p>
      {description}
    </p> 
    <span>By Oladman</span></div>
  </div> </Link>
  )
}

export default Hotpanel