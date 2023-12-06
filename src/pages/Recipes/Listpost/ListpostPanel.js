import React from 'react'
import { Link } from 'react-router-dom'


function ListpostPanel({ id, title, body, image, ingredients, recipe }) {
  return (
    <div className='container-list-post'>
    <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/recipe/${id}`}
      > <div className="list-post">
    <div className="list-left">
      <img src={image} />
    </div>

    <div className="list-right">
      <p className="list-right-up">TRENDING</p>
      <p className="list-right-down">{title}</p>
    </div>
  </div>
  </Link>
  <hr className='sevenhot-recipe' />
  
  </div>
  )
}

export default ListpostPanel