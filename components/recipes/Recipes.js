"use client"
import { useState, useEffect } from "react";

export default function() {

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getRecipes() {
      const res = await fetch("/api/recipes");
      const json = await res.json();
      setRecipes(json.recipes);
      setLoading(false);
    }
    getRecipes();
  }, [])
  
  return (
    <div className="font-sans text-3xl">
      {loading ? "Loading" : recipes[0].title}
    </div>
  );
}