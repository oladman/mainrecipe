import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BiPrinter } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import HotSkeleton from "../../components/HotSkeleton"; 

function ReadRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/getRecipe/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/delete/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

 
  if (loading) {
    return (
      <div id="wrapper" className="Read-Recipe-Overall">
        <div className="Read-Recipe">
          <HotSkeleton />
          <HotSkeleton />
        </div>
      </div>
    );
  }


  if (!recipe) return null;


  return (
    <div id="wrapper" className="Read-Recipe-Overall fade-in">
      <div className="Read-Recipe">
        <h1>{recipe.Title}</h1>

        <div className="icon-recipe-group">
          <div className="read-recipe-icon">
            <MdOutlineSaveAlt /> <p>SAVE</p>
          </div>
          <div className="read-recipe-icon">
            <BiPrinter /> <p>PRINT</p>
          </div>
          <div className="read-recipe-icon">
            <IoIosShareAlt /> <p>SHARE</p>
          </div>
          <div className="read-recipe-icon">
            <MdStarRate /> <p>RATE</p>
          </div>
        </div>

        <p className="text-recipe">{recipe.Description}</p>

        <div className="m-ad">
          <img src="/ad1.jpg" alt="Advertisement" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>
        </div>

        <div className="read-image-style">
          <img
            className="read-recipe-image"
            alt={recipe.Title}
            src={recipe.image}
          />
        </div>

        {recipe.ingredients && (
          <div className="overal-ingredients">
            <h2 className="ingredient-style">INGREDIENTS</h2>
            <ul>
              {recipe.ingredients.map((ingre, index) => (
                <li className="ingre-style" key={index}>
                  {ingre}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="m-ad">
          <img src="/ad2.jpg" alt="advertisement" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>
        </div>

        <p className="body-text">{recipe.Body}</p>
      </div>

      <div className="advert-recipe">
        <h2>Fake Advertisement</h2>
        <div className="ad-two">
          <img src="/ad1.jpg" alt="advertisement" />
        </div>
        <div className="ad-two">
          <img src="/ad2.jpg" alt="advertisement" />
        </div>
        <div className="ad-two">
          <img src="/ad3.jpg" alt="advertisement" />
        </div>
      </div>
    </div>
  );
}

export default ReadRecipe;
