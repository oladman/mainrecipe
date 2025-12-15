import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipePanel from "./RecipePanel";
import HotSkeleton from "../../components/HotSkeleton"; 

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/getRecipe`, {
        params: { _limit: 20 },
      })
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="overal-post-container">
        {[...Array(10)].map((_, index) => (
          <HotSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="overal-post-container fade-in">
      {recipe.map((item) => (
        <RecipePanel
          key={item._id}
          id={item._id}
          title={item.Title}
          body={item.Body}
          ingredients={item.ingredients}
          image={item.image}
          time={item.time}
          recipe={item}
          tag={item.tag}
        />
      ))}
    </div>
  );
}

export default Recipe;
