"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import RecipeCard from "./RecipeCard";

export default function Recipes() {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	// const recipes = [
	// 	{
	// 		userId: 1,
	// 		id: 1,
	// 		title: "Monkey Bread",
	// 		body: "quia et suscipit suscipit recusandae consequuntur",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 2,
	// 		title: "Apple Pie",
	// 		body: "est rerum tempore vitae",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 3,
	// 		title: "Chocolate Babka",
	// 		body: "est rerum tempore vitae",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 3,
	// 		title: "Babka",
	// 		body: "est rerum tempore vitae",
	// 	},
	// ];
  async function getRecipes() {
    const res = await fetch("/api/recipes");
    const json = await res.json();
    // console.log(json.recipes[0].ingredients);
    setRecipes(json.recipes);
    setLoading(false);
  }

  const handleDelete = (id) => {
    setRecipes(prevRecipes => {
      return prevRecipes.filter(rec => rec.id !== id)
    })  
  }

	useEffect(() => {
		getRecipes();
	}, []);

	if (loading) {
		return (
			<div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 sm:gap-x-5 sm:gap-y-10">
				<Skeleton
					baseColor="#ffe3ea"
					highlightColor="#ffd5de"
					borderRadius="0.8rem"
					duration={1}
					height={"9rem"}
					width={"100%"}
				/>
			</div>
		);
	} else {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 sm:gap-x-5 sm:gap-y-15 mb-20 px-5">
				{recipes.length != 0 ? (
					recipes.map((recipe, index) => (
						<RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
					))
				) : (
					<article className="bg-white rounded-xl h-[8.2rem] sm:h-[11.2rem] border border-primary px-6 py-4 sm:p-6 duration-200 flex flex-col drop-shadow-lg justify-center items-center">
						<Link
							href="/new"
							className="px-4 py-3 rounded-xl drop-shadow-lg bg-accent font-medium text-white flex justify-center items-center sm:text-base text-sm hover:bg-primary duration-300"
						>
							New Recipe!
						</Link>
					</article>
				)}
			</div>
		);
	}
}
