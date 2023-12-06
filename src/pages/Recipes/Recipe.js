import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipePanel from "./RecipePanel";

function Recipe() {
  const [Recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://updatedrecipebackend.onrender.com/getRecipe",

        {
          params: {
            _limit: 20,
          },
        }
      )
      .then((res) => {
        setRecipe(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewRecipe = Recipe.map((recipe, index) => {
    return (
      <RecipePanel
        key={index}
        id={recipe._id}
        title={recipe.Title}
        body={recipe.Body}
        ingredients = {recipe.ingredients}
        image={recipe.image}
        recipe={recipe}
      />
    );
  });

  return<>
  
  <div className="overal-post-container">{NewRecipe}</div> 
  

  
  
  </> 
}

export default Recipe;
