import React, { useEffect, useState } from "react";
import axios from "axios";
import Appetizerpanel from "./Appetizerpanel";

function AppertizerMain() {
  const [Recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/appetizer`, {
        params: {
          _limit: 20,
        },
      })
      .then((res) => {
        setRecipe(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewRecipe = Recipe.map((recipe, index) => (
    <Appetizerpanel
      key={index}
      id={recipe._id}
      title={recipe.Title}
      body={recipe.Body}
      ingredients={recipe.ingredients}
      image={recipe.image}
      time={recipe.time}
      tag={recipe.tag}
      recipe={recipe}
    />
  ));

  return (
    <div className="overal-post-container">{NewRecipe}</div>
  );
}

export default AppertizerMain;
