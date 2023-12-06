import React, { useEffect, useState } from "react";
import axios from "axios";
import Hotpanel from "./Hotpanel";


function Hot() {

    const [Recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://updatedrecipebackend.onrender.com/gethotone",

        {
          params: {
            _limit: 1,
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

  const HotRecipe = Recipe.map((recipe, index) => {
    return (
      <Hotpanel
        key={index}
        id={recipe._id}
        title={recipe.Title}
        body={recipe.Body}
        description={recipe.Description}
        ingredients = {recipe.ingredients}
        image={recipe.image}
        recipe={recipe}
      />
    );
  });

  return <>
    <div className="">{HotRecipe}</div> 
    </>
  
}

export default Hot;
