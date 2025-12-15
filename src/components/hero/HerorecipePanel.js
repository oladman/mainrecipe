import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleHero from "../SingleHero";
import HotSkeleton from "../HotSkeleton";

function HerorecipePanel() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/craving`)
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
      <div className="hero-craving">
        {[...Array(4)].map((_, index) => (
          <HotSkeleton key={index} />
        ))}
      </div>
    );
  }


  return (
    <div className="hero-craving fade-in">
      {recipe.map((item) => (
        <SingleHero
          key={item._id}
          id={item._id}
          title={item.Title}
          body={item.Body}
          ingredients={item.ingredients}
          image={item.image}
          time={item.time}
          tag={item.tag}
          recipe={item}
        />
      ))}
    </div>
  );
}

export default HerorecipePanel;
