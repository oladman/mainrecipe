import React, { useEffect, useState } from "react";
import axios from "axios";
import ListpostPanel from "./ListpostPanel";
import HotSkeleton from "../../../components/HotSkeleton"; 

function Listpost() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/gethotseven`)
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
      <div>
        {[...Array(7)].map((_, index) => (
          <HotSkeleton key={index} />
        ))}
      </div>
    );
  }
  


  return (
    <div className="fade-in">
      {recipe.map((item) => (
        <ListpostPanel
          key={item._id}
          id={item._id}
          title={item.Title}
          body={item.Body}
          description={item.Description}
          ingredients={item.ingredients}
          image={item.image}
          recipe={item}
        />
      ))}
    </div>
  );
}

export default Listpost;
