import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostRecipe() {
  const navigate = useNavigate();

  const [Recipe, setRecipe] = useState({
    Title: "",
    Description: "",
    Body: "",
    ingredients: [],
    time: "",
    image: "",
    category: "",
    tag: "",
  });

  // Handle change for individual ingredients
  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...Recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...Recipe, ingredients });
  };

  // Add a new blank ingredient input
  const handleAddIngredient = () => {
    setRecipe({ ...Recipe, ingredients: [...Recipe.ingredients, ""] });
  };

  // Submit the recipe
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/create`, Recipe)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cover-recipe">
      <div className="inner-cover-recipe">
        <h2 style={{ marginTop: "10px" }}>Add New Recipe</h2>

        <form className="create-style" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Title">Title</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Title"
              placeholder="Post Title"
              onChange={(e) =>
                setRecipe({ ...Recipe, Title: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Description">Description</label>
            <textarea
              style={{ padding: "10px" }}
              type="text"
              name="Description"
              placeholder="Add Description ..."
              onChange={(e) =>
                setRecipe({ ...Recipe, Description: e.target.value })
              }
            />
          </div>

          {/* Ingredients */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="ingredients">Ingredients</label>
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
            <button
              className="btn-addingredient"
              type="button"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>

          {/* Body */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Body">Body</label>
            <textarea
              style={{ minHeight: "100px", padding: "10px" }}
              type="text"
              name="Body"
              placeholder="Post Body ..."
              onChange={(e) => setRecipe({ ...Recipe, Body: e.target.value })}
            />
          </div>

          {/* Cooking Time */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="time">Cooking Time</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="time"
              placeholder="Time"
              onChange={(e) => setRecipe({ ...Recipe, time: e.target.value })}
            />
          </div>

          {/* Image */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="image">Image</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="image"
              placeholder="Image link"
              onChange={(e) => setRecipe({ ...Recipe, image: e.target.value })}
            />
          </div>

          {/* Category */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              style={{ padding: "10px" }}
              onChange={(e) => setRecipe({ ...Recipe, category: e.target.value })}
            >
              <option>--- SELECT CATEGORY---</option>
              <option value="hot">Hot</option>
              <option value="recipes">Recipe</option>
              <option value="meals">Meals</option>
              <option value="dinner">Dinner</option>
              <option value="card">Card</option>
            </select>
          </div>

          {/* Tag */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="tag">Tag</label>
            <select
              name="tag"
              style={{ padding: "10px" }}
              onChange={(e) => setRecipe({ ...Recipe, tag: e.target.value })}
            >
              <option>--- SELECT TAG ---</option>
              <option value="Dessert">Dessert</option>
              <option value="Salad">Salad</option>
              <option value="Soup">Soup</option>
              <option value="Minsmeal">30 min meals</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Maincourse">Main Course</option>
              <option value="Sides">Sides</option>
            </select>
          </div>

          {/* Submit */}
          <div className="btn-cover-recipe">
            <button className="recipe-btnm">POST RECIPE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostRecipe;
