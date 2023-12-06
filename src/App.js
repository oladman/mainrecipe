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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Post-recipe" element={<PostRecipe />} />
      <Route path="/recipe/:id" element={<ReadRecipe />} />
      <Route path="/edit/:id" element={<Edit />} />
     


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
