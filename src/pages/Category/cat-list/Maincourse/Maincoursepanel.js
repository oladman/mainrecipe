import React from 'react'
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

function Maincoursepanel({ id, title, body, image, time, ingredients,tag, recipe }) {
    
  return (
    <><Link
    style={{ textDecoration: "none", color: "black" }}
    to={`/recipe/${id}`}
  >
    <div className="post-container">
      
        <div className="top-img">
          <img src={image} />
          <p style={{ fontWeight:'700', color:'#31304D', marginLeft:'10px',  }}>{tag}</p>
        </div>
      
        <div className="bottom">
          <p className="hover-hover">{title}</p>
          <p className="time-style"><IoMdTime /> {time}</p>
        </div>
       
      
    </div>
    </Link>
    </>
  )
}

export default Maincoursepanel