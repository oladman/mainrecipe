import React from "react";
import "./Global.css";
import SingleHero from "./components/SingleHero";
import LatestRecipe from "./components/LatestRecipe";
import SubscribeRecipe from "./components/SubscribeRecipe";
import HeroRecipe from "./components/HeroRecipe";
import Recipe from "./pages/Recipes/Recipe";
import CategoryRecipe from "./pages/Category/CategoryRecipe";
import { PiBowlFoodBold } from "react-icons/pi";
import Hot from "./components/Hot";
import Listpost from "./pages/Recipes/Listpost/Listpost";
import List from "./pages/Recipes/Listpost/List";



function Home() {
  return (
    <div className="wrapper">
      <HeroRecipe />

      <div className="sub-sub-sub">
        <SubscribeRecipe />
      </div>
      <Hot />
      <CategoryRecipe />
      <List />

      <div className="latest-post">
        <div className="latest-post-header">
          <h2>
            LATEST POSTS <PiBowlFoodBold />
          </h2>
        </div>

        <Recipe />
      </div>
    </div>
  );
}

export default Home;
