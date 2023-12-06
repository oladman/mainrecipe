import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BiPrinter } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

function ReadRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://updatedrecipebackend.onrender.com/getRecipe/" + id)
      .then((res) => {
        setRecipe(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://updatedrecipebackend.onrender.com/delete/" + id)
      .then((res) => {
        console.log(res);
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Read-Recipe-Overall">
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
        <div className="edit-delete-style">
          <button className="edit-delete-button">
            <Link
              style={{ textDecoration: "none", color: "red" }}
              to={`/edit/${id}`}
            >
              <FaRegEdit
                style={{
                  marginRight: "5px",
                  color: "black",
                  backgroundColor: "white",
                }}
              />
              EDIT RECIPE
            </Link>
          </button>
          <button onClick={() => handleDelete(id)} className="edit-delete-button">
          <FaDeleteLeft   />  DELETE
          </button>
        </div>
        <br />

        <p className="text-recipe">{recipe.Description} </p>
        <br />
        <div className="m-ad">
       
          <img src="/ad1.jpg" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>{" "}
        </div>
        <img className="read-recipe-image"
          style={{  marginTop: "20px", marginBottom: "10px" }}
          src={recipe.image}
        />

        {recipe.ingredients && (
          <div className="overal-ingredients">
            <ul>
              <h2 className="ingredient-style">INGREDIENTS</h2>

              {recipe.ingredients.map((ingre, index) => (
                <li className="ingre-style" key={index}>
                  {ingre}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="m-ad">
          <img src="/ad2.jpg" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>
        </div>

        <p className="text-recipe">{recipe.Body}</p>
      </div>
      <div className="advert-recipe">
        <h2>Advertisement</h2>
        <div>
          {" "}
          <img src="/ad1.jpg" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>{" "}
        </div>
        <div className="ad-two">
          <img src="/ad2.jpg" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>
        </div>
        <div>
          <img src="/ad3.jpg" />
          <p style={{ fontSize: "12px" }}>Some Advertisement</p>
        </div>
      </div>
    </div>
  );
}

export default ReadRecipe;
