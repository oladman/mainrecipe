import React from "react";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

function RecipePanel({ id, title, body, image, time,tag, ingredients, recipe }) {
  return (
    <Link
    style={{ textDecoration: "none", color: "black" }}
    to={`/recipe/${id}`} className="parent-post-container"
  >
    <div className="post-container">
      
        <div className="top-img">
          <img src={image} />
         
        </div>
        
      
        <div className="bottom-post-container">
           <p style={{ fontWeight:'700', color:'#31304D', marginLeft:'0px'}}> {tag}</p>
          <p className="hover-hover">{title}</p>
          <p className="time-style"><IoMdTime /> {time}</p>
        </div>
       
      
    </div>
    </Link>
  );
}

export default RecipePanel;
