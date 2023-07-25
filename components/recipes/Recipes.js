"use client";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

export default function () {
	// const [recipes, setRecipes] = useState([]); 
	const [loading, setLoading] = useState(false);
	const recipes = [
		{
			userId: 1,
			id: 1,
			title: "Monkey Bread",
			body: "quia et suscipit suscipit recusandae consequuntur",
		},
		{
			userId: 1,
			id: 2,
			title: "Apple Pie",
			body: "est rerum tempore vitae",
		},
    {
			userId: 1,
			id: 3,
			title: "Chocolate Babka",
			body: "est rerum tempore vitae",
		}
	];
	// useEffect(() => {
	// 	async function getRecipes() {
	// 		const res = await fetch("/api/recipes");
	// 		const json = await res.json();
	// 		setRecipes(json.recipes);
	// 		setLoading(false);
	// 	}
	// 	getRecipes();
	// }, []);

	if (loading) {
		return <>Loading</>;
	} else {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		);
	}
}
