import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Layout from "./layout/Layout";
import "./Global.css";
import SingleHero from "./components/SingleHero";
import LatestRecipe from "./components/LatestRecipe";
import SubscribeRecipe from "./components/SubscribeRecipe";
import HeroRecipe from "./components/HeroRecipe";
import Home from "./Home";
import PostRecipe from "./pages/Post/PostRecipe";
import ReadRecipe from "./pages/Recipes/ReadRecipe";
import Edit from "./pages/Post/Edit";
import Dessert from "./pages/Category/cat-list/Dessert/Dessert";
import Salad from "./pages/Category/cat-list/Salad/Salad";
import Soup from "./pages/Category/cat-list/Soup/Soup";
import Minsmeal from "./pages/Category/cat-list/Minsmeal/Minsmeal";
import Breakfast from "./pages/Category/cat-list/Breakfast/Breakfast";
import Appetizer from "./pages/Category/cat-list/Appetizer/Appetizer";
import Maincourse from "./pages/Category/cat-list/Maincourse/Maincourse";
import Sides from "./pages/Category/cat-list/Sides/Sides";
import Allrecipe from "./pages/Category/cat-list/Allrecipe";
import Dinner from "./pages/Category/cat-list/Dinner/Dinner";
import Meals from "./pages/Category/cat-list/Meals";
import Foodnews from "./pages/Category/cat-list/Foodnews";
import KitchenTips from "./pages/Category/cat-list/KitchenTips";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Post-recipe" element={<PostRecipe />} />
      <Route path="/recipe/:id" element={<ReadRecipe />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/page/dessert" element={<Dessert />} />
      <Route path="/page/salad" element={<Salad />} />
      <Route path="/page/soup" element={<Soup />} />
      <Route path="/page/30-mins-meal" element={<Minsmeal />} />
      <Route path="/page/breakfast" element={<Breakfast />} />
      <Route path="/page/appetizer" element={<Appetizer />} />
      <Route path="/page/main-course" element={<Maincourse />} />
      <Route path="/page/sides" element={<Sides />} />
      <Route path="/page/recipe" element={<Allrecipe />} />
      <Route path="/page/dinner" element={<Dinner />} />
      <Route path="/page/meals" element={<Meals />} />
      <Route path="/page/news" element={<Foodnews />} />\
      <Route path="/page/tips" element={<KitchenTips />} />
          </Route>
    

          </>
          ));

function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
