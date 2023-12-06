import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostRecipe() {
  const navigate = useNavigate();
  const [Recipe, setRecipe] = useState({
    Title: "",
    Description:"",
    Body: "",
    ingredients: [],
    image: "",
  });

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...Recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...Recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...Recipe.ingredients, ""];
    setRecipe({ ...Recipe, ingredients });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("recipeeee", Recipe);
    axios
      .post("https://recipenew.onrender.com/create", Recipe)
      .then((res) => {
        console.log(res);

        navigate("/");
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="cover-recipe">
      <div className="inner-cover-recipe">
        <h2 style={{ marginTop:'10px' }}>Add New Recipe</h2>
      

        <form className="create-style" onSubmit={handleSubmit}>
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Title" id="">
              Title
            </label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Title"
              placeholder="Post Title"
              onChange={(e) => setRecipe({ ...Recipe, Title: e.target.value })}
            />
          </div>
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Description" id="">
              Description
            </label>
            <textarea
              style={{ padding: "10px" }}
              type="text"
              name="Description"
              onChange={(e) => setRecipe({ ...Recipe, Description: e.target.value })}
              placeholder="Add Description ..."
            />
          </div>

          <div className="input-recipe" style={{ marginTop: "10px" }}> <label htmlFor="ingredients">Ingredients</label>
          {Recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              style={{ padding: "10px" }}
              type="text"
              name="ingredients"
              placeholder="Add Ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
            />
          ))} 
          <button className="btn-addingredient" type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button> </div>
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="body" id="">
              Body
            </label>
            <textarea
     
              type="text"
              name="Body"
              onChange={(e) => setRecipe({ ...Recipe, Body: e.target.value })}
              placeholder="Post Body ..."
              style={{ minHeight:'100px', padding: "10px" }}
            />
          </div>
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="image" id="">
              image
            </label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="image"
              placeholder="Image link"
              onChange={(e) => setRecipe({ ...Recipe, image: e.target.value })}
            />
          </div>
          <div className="btn-cover-recipe">
            <button className="recipe-btnm">POST RECIPE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostRecipe;
