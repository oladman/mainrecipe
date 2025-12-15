import React, { useEffect, useState } from "react";
import axios from "axios";
import Hotpanel from "./Hotpanel";
import HotSkeleton from "./HotSkeleton";

function Hot() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/gethotone`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <div className="spinner" />
    </div>
  );
}

  return (
    <div className="fade-in">
      {recipe.map((item) => (
        <Hotpanel
          key={item._id}
          id={item._id}
          title={item.Title}
          description={item.Description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Hot;
