import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    Title: "",
    Description: "",
    Body: "",
    ingredients: [],
    image: "",
  });

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  // ✅ Only ONE correct useEffect
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getRecipe/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    axios
      .put(`${process.env.REACT_APP_API_URL}/update/${id}`, recipe)
      .then((res) => {
        console.log(res);
        navigate(`/recipe/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cover-recipe">
      <div className="inner-cover-recipe">
        <h2>Edit Recipe</h2>
        <hr style={{ width: "80%" }} className="sign-line" />

        <form className="create-style" onSubmit={handleUpdate}>
          {/* Title */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Title">Title</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              value={recipe.Title}
              name="Title"
              placeholder="Post Title"
              onChange={(e) => setRecipe({ ...recipe, Title: e.target.value })}
            />
          </div>

          {/* Description */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Description">Description</label>
            <textarea
              style={{ padding: "10px" }}
              type="text"
              value={recipe.Description}
              name="Description"
              onChange={(e) =>
                setRecipe({ ...recipe, Description: e.target.value })
              }
              placeholder="Add Description ..."
            />
          </div>

          {/* Ingredients */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
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
          </div>

          {/* Body */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="Body">Body</label>
            <textarea
              style={{ padding: "10px", minHeight: "100px" }}
              value={recipe.Body}
              name="Body"
              onChange={(e) => setRecipe({ ...recipe, Body: e.target.value })}
              placeholder="Post Body ..."
            />
          </div>

          {/* Image */}
          <div className="input-recipe" style={{ marginTop: "10px" }}>
            <label htmlFor="image">Image</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              value={recipe.image}
              name="image"
              placeholder="Image link"
              onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
            />
          </div>

          <div className="btn-cover-recipe">
            <button className="recipe-btnm">UPDATE RECIPE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
