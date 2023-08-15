"use client";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

export default function View({ params }) {
	const [loading, setLoading] = useState(true);
	const [recipe, setRecipe] = useState({});
	const fetchRecipe = async () => {
		console.log("Running");
		const res = await fetch(`/api/getRecipe?id=${params.id}`);
		const recipe = await res.json();
    console.log(recipe);
		setRecipe(recipe.recipe[0]);
		setLoading(false);
	};

	// const recipe = {
	// 	id: "8f8cdad3-4e4a-4fe8-91eb-149151646e34",
	// 	created_at: "2023-08-14T06:31:39.29472+00:00",
	// 	title: "Caramel Sauce",
	// 	time: 30,
	// 	time_unit: "minutes",
	// 	serves: 4,
	// 	favourite: false,
	// 	creator: "5f0979c0-1029-46fe-b6df-6859f42a710b",
	// 	ingredients: [
	// 		{
	// 			id: "db875549-00b0-cb66-830e-6ee8532171bc",
	// 			unit: "grams",
	// 			title: "Sugar",
	// 			quantity: "200",
	// 		},
	// 		{
	// 			id: "b065fa17-d474-dee6-f261-8f68a33cb146",
	// 			unit: "grams",
	// 			title: "Glucose",
	// 			quantity: "80",
	// 		},
	// 		{
	// 			id: "40b546a7-1230-431d-a8fd-f2b6357c424d",
	// 			unit: "grams",
	// 			title: "Cream",
	// 			quantity: "85",
	// 		},
	// 		{
	// 			id: "ae7942ba-c7ee-b866-05bd-b4daf5d0667f",
	// 			unit: "grams",
	// 			title: "Butter, softened to the melted bricks",
	// 			quantity: "60",
	// 		},
	// 	],
	// 	instructions: [
	// 		{
	// 			id: "f7f96b71-b6b2-be9a-a70e-2fb421d464b0",
	// 			content: "Place thin layer of sugar in pan with glucose and melt",
	// 		},
	// 		{
	// 			id: "35745919-74b2-2559-bd5c-7c065254987e",
	// 			content:
	// 				"Keep adding sugar, quarter of cup at a time. Stir to make sure it's all melted",
	// 		},
	// 		{
	// 			id: "922d104b-426e-90d8-b7fa-3a21f04c7495",
	// 			content: "Once amber, take off heat and add in butter ",
	// 		},
	// 		{
	// 			id: "79f4ef0a-251c-6c6f-3f6b-3c71109bf51f",
	// 			content: "Then add cream and stir until smooth and store in a jar",
	// 		},
	// 	],
	// };

	useEffect(() => {
		fetchRecipe();
	}, []);
	if (loading) {
		return <>Loading</>;
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
								<div className="flex flex-row items-center gap-3" key={instruction.id}>
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
