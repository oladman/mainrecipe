import React from "react";
import "./Global.css";
import SubscribeRecipe from "./components/SubscribeRecipe";
import HeroRecipe from "./components/hero/HeroRecipe";
import Recipe from "./pages/Recipes/Recipe";
import CategoryRecipe from "./pages/Category/CategoryRecipe";
import { PiBowlFoodBold } from "react-icons/pi";
import Hot from "./components/Hot";
import List from "./pages/Recipes/Listpost/List";

function Home() {
  return (
    <div id="wrapper">
      <HeroRecipe />
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
      <SubscribeRecipe />
    </div>
  );
}

export default Home;
