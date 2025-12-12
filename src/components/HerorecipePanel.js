import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleHero from "./SingleHero";

function HerorecipePanel() {
  const [Recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://recipebackend-hzfn.onrender.com/craving",
      )
      .then((res) => {
        setRecipe(res.data);
   
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewRecipe = Recipe.map((recipe, index) => {
    return (
      <SingleHero
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
    );
  });

  return (
    <>
      <div className="hero-craving">{NewRecipe}</div>
    </>
  );
}

export default HerorecipePanel;
