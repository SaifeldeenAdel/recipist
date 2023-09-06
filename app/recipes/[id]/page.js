"use client";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function View({ params }) {
	const [loading, setLoading] = useState(true);
	const [recipe, setRecipe] = useState({});
	const fetchRecipe = async () => {
		const res = await fetch(`/api/getRecipe?id=${params.id}`);
		const recipe = await res.json();
		setRecipe(recipe.recipe[0]);
		setLoading(false);
	};

	useEffect(() => {
		fetchRecipe();
	}, []);
  
	if (loading) {
		return (
			<SkeletonTheme
				baseColor="#ffe3ea"
				highlightColor="#ffd5de"
				borderRadius="0.8rem"
				duration={1}
			>
				<div className="flex flex-col gap-6 px-5 sm:px-0">
					<div className="w-full sm:w-[25rem]">
						<Skeleton height={"3rem"} width={"90%"} />
					</div>

					<div className="w-full sm:w-[25rem]">
						<Skeleton height={"20rem"} width={"100%"} />
					</div>

					<div className="w-full">
						<Skeleton height={"15rem"} width={"100%"} />
					</div>
				</div>
			</SkeletonTheme>
		);
	} else {
		return (
			<>
				<header className="px-5 sm:px-0">
					<h1 className="text-accent font-bold text-4xl">{recipe.title}</h1>
					<div className="grid grid-cols-5 gap-4 max-w-[15rem] my-6">
						<div className="col-span-3 flex flex-row justify-center items-center border border-accent text-accent gap-2 py-1 bg-white rounded-xl">
							<span className="font-bold">{recipe.time}</span>{" "}
							<span>{recipe.time_unit}</span>
						</div>
						<div className="col-span-2 flex flex-row justify-center items-center border border-accent text-accent gap-3 py-1 bg-white rounded-xl">
							<span className="font-bold">{recipe.serves}</span>{" "}
							<BiUser className="text-xl" />{" "}
						</div>
					</div>
				</header>
				<div className="px-5 sm:px-0 flex flex-col gap-4">
					<section className="rounded-xl w-full sm:w-[25rem] bg-secondary py-5 p-3">
						<h2 className="text-primary text-2xl font-semibold pl-3">
							Ingredients
						</h2>
						<div className="flex flex-row my-5 gap-2 text-lg px-5">
							<div className="gap-2 flex flex-col border-r pr-4 border-r-black">
								{recipe.ingredients.map((ingredient, index) => (
									<div
										className="text-right font-bold"
										key={ingredient.id}
									>
										{ingredient.quantity} {ingredient.unit}
									</div>
								))}
							</div>
							<div className="w-40 gap-2 flex flex-col ">
								{recipe.ingredients.map((ingredient, index) => (
									<div
										className="font-light"
										key={`${ingredient.id}-2`}
									>
										{ingredient.title}
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="rounded-xl w-full bg-secondary p-3 mb-10">
						<h2 className="text-primary text-2xl font-semibold pl-3">
							Instructions
						</h2>
						<div className="text-base sm:text-lg px-3 flex flex-col gap-3 sm:gap-2 my-4">
							{recipe.instructions.map((instruction, index) => (
								<div
									className="flex flex-row items-center gap-3"
									key={instruction.id}
								>
									<div className="p-2 rounded-xl bg-accent text-white h-10 sm:w-10 sm:h-10 flex justify-center items-center text-xl font-semibold">
										<span className="mb-1">{index + 1}</span>
									</div>
									<div className="font-light">
										{instruction.content}
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</>
		);
	}
}
