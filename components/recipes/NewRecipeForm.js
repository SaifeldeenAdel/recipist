"use client";
import { useState } from "react";
import uuid from 'react-uuid';

import { BiUser } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

import Ingredient from "../Ingredients/Ingredient";

export default function NewRecipeForm() {
	const [title, setTitle] = useState("");

  // That new object that's created every time user clicks on plus icon
	const newIngredient = {
    id: uuid(),
		quantity: "",
		unit: "",
		title: "",
	};

	const [ingredients, setIngredients] = useState([newIngredient]);
	const handleSubmit = () => {};


  // Callback for adding an Ingredient
	const handleAddIngredient = () => {
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    
	};

  // Callback for deleting an Ingredient
	const handleDeleteIngredient = (index) => {
		if (ingredients.length > 1) {
			ingredients.splice(index, 1);
			console.log(ingredients);
			setIngredients([...ingredients]);
		}
	};

  // Callback for updating an Ingredient
	const handleChangeIngredient = (ingredients) => {
    console.log(ingredients);
		setIngredients([...ingredients]);
	};

	return (
		<form method="post" onSubmit={handleSubmit}>
			<div className="flex flex-col justify-between sm:flex-row">
				<input
					value={title}
					required
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					className="text-2xl sm:text-3xl font-sans font-bold placeholder:opacity-20 bg-background border-0 outline-0 focus:ring-0 text-accent placeholder:text-accent p-0"
					placeholder="Recipe Title"
				/>
				<hr className="block sm:hidden w-full mt-3 h-[0.1rem] sm:h-[0.1rem] bg-accent" />
				<div className="grid grid-cols-3 sm:grid-cols-3 gap-3 lg:m-0 mt-4">
					<div className="flex flex-row col-span-2 items-center justify-center border border-accent py-0 px-4 sm:pl-4 sm:px-4 sm:py-2 bg-white rounded-xl">
						<input
							required
							type="number"
							min={1}
							className="text-lg lg:text-xl font-sans mb-1 w-12 font-bold placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-accent placeholder:text-accent p-0"
							placeholder="5"
							name="time"
						/>
						<select className="font-bold text-primary text-base border-0 outline-none p-0 focus:ring-0">
							<option className="p-2" value="Hours">
								Hours
							</option>
							<option className="p-2" value="Minutes">
								Minutes
							</option>
						</select>
					</div>

					<div className="flex flex-row col-span-1 justify-center items-center border border-accent bg-white rounded-xl">
						<input
							type="number"
							required
							min={1}
							className="text-xl font-sans text-center mb-1 w-12 font-bold placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-primary placeholder:text-accent p-0"
							placeholder="10"
							name="servings"
						/>
						<label
							htmlFor="servings"
							className="font-bold text-primary text-base"
						>
							<BiUser className="text-xl" />{" "}
						</label>
					</div>
				</div>
			</div>
			<hr className="hidden sm:block w-full mt-3 h-[0.2rem] sm:h-[0.1rem] bg-accent" />

			<div className="mt-10">
				<h2 className="text-primary text-[1.3rem] sm:text-[1.5rem]">
					Ingredients
				</h2>

				<div className="grid grid-cols-10 mt-3 w-full sm:w-[35rem] gap-x-2 sm:gap-x-4 gap-y-2">
					<h3 className="text-black opacity-40 font-bold col-span-2">Qty</h3>
					<h3 className="text-black opacity-40 font-bold col-span-2">Unit</h3>
					<h3 className="text-black opacity-40 font-bold col-span-5">Name</h3>
					<h3 className="text-black opacity-40 font-bold col-span-1"></h3>

					{ingredients.map((ingredient, index) => (
						<Ingredient
							key={ingredient.id}
							index={index}
							ingredientList={ingredients}
							handleChangeIngredient={handleChangeIngredient}
							handleDeleteIngredient={handleDeleteIngredient}
						/>
					))}

					<button
						type="button"
						onClick={handleAddIngredient}
						className="col-span-10 rounded-lg bg-accent py-2 flex justify-center mt-3 hover:bg-primary duration-300"
					>
						<FaPlus className="text-white text-[1rem] font-bold" />
					</button>
				</div>
			</div>

			<br />
			<br />
			<button type="submit">Save!</button>
		</form>
	);
}