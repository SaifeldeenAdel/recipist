"use client";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { BiUser } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader";

import Ingredient from "../Ingredients/Ingredient";
import Instruction from "../Instruction/Instruction";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function EditRecipeForm({params}) {
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const [timeUnit, setTimeUnit] = useState("hours");
	const [serves, setServes] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false)
	const [loading, setLoading] = useState(true);

	// That new object that's created every time user clicks on plus icon
	const newIngredient = {
		id: uuid(),
		quantity: "",
		unit: "cups",
		title: "",
	};

	const newInstruction = {
		id: uuid(),
		content: "",
	};

	const router = useRouter();
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	const fetchRecipe = async () => {
		const res = await fetch(`/api/editRecipe?id=${params.id}`);
		const recipe = await res.json();
		setTitle(recipe.recipe[0].title);
		setTime(recipe.recipe[0].time);
		setTimeUnit(recipe.recipe[0].time_unit);
		setServes(recipe.recipe[0].serves);
		setIngredients(recipe.recipe[0].ingredients);
		setInstructions(recipe.recipe[0].instructions);
		setLoading(false);
	};

	useEffect(() => {
		fetchRecipe();
	}, []);

	const validateForm = () => {
		const invalidIns = instructions.some((i) => i.content == "");
		const invalidIng = ingredients.some(
			(i) => i.quantity == "" || i.unit == "" || i.title == ""
		);
		if (title == "" || time == "" || serves == "" || invalidIns || invalidIng) {
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		if (validateForm()) {
			e.preventDefault();
			setSubmitLoading(true);
			try {
				const res = await fetch("/api/editRecipe", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						id: params.id,
						title: title,
						time: time,
						time_unit: timeUnit,
						serves: serves,
						ingredients: ingredients,
						instructions: instructions,
					}),
				});
				const data = await res.json();
				if (data.status == 200 && res.ok) {
					router.push("/");
				} else {
					console.log(data.error);
				}
			} catch (e) {
				console.log(e.message || e.description);
				setSubmitLoading(false);
			}
		}
	};

	// Callback for adding an Ingredient
	const handleAddIngredient = () => {
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	};

	// Callback for deleting an Ingredient
	const handleDeleteIngredient = (index) => {
		if (ingredients.length > 1) {
			ingredients.splice(index, 1);
			setIngredients([...ingredients]);
		}
	};

	// Callback for updating an Ingredient
	const handleChangeIngredient = (ingredients) => {
		setIngredients([...ingredients]);
	};

	// Callback for adding an Instruction
	const handleAddInstruction = () => {
		setInstructions((prevInstructions) => [...prevInstructions, newInstruction]);
	};

	// Callback for deleting an Instruction
	const handleDeleteInstruction = (index) => {
		if (instructions.length > 1) {
			instructions.splice(index, 1);
			setInstructions([...instructions]);
		}
	};

	// Callback for updating an Instruction
	const handleChangeInstruction = (instructions) => {
		setInstructions([...instructions]);
	};

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
						<Skeleton height={"10rem"} width={"100%"} />
					</div>

					<div className="w-full">
						<Skeleton height={"10rem"} width={"100%"} />
					</div>
				</div>
			</SkeletonTheme>
		);
	} else {
		return (
			<form className="px-2">
				<div className="flex flex-col justify-between sm:flex-row px-3">
					<input
						value={title}
						required
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						className="text-2xl sm:text-3xl font-sans font-bold placeholder:opacity-20 bg-background border-0 outline-0 focus:ring-0 text-accent placeholder:text-accent p-0 sm:w-[70%]"
						placeholder="Recipe Title"
					/>
					<hr className="block sm:hidden w-full mt-3 h-[0.2rem] bg-accent" />
					<div className="grid grid-cols-3 sm:grid-cols-3 gap-3 lg:m-0 mt-4">
						<div className="flex flex-row col-span-2 items-center justify-center border border-accent py-0 px-4 sm:pl-4 sm:px-0 sm:py-2 bg-white rounded-xl">
							<input
								required
								value={time}
								onChange={(e) => setTime(e.target.value)}
								type="number"
								min={1}
								className="text-lg lg:text-xl font-sans mb-1 w-12 font-bold placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-accent placeholder:text-accent p-0"
								placeholder="5"
								name="time"
							/>
							<select
								value={timeUnit}
								onChange={(e) => setTimeUnit(e.target.value)}
								className="font-bold text-primary text-base border-0 outline-none p-0 focus:ring-0"
							>
								<option className="p-2" value="hours">
									Hours
								</option>
								<option className="p-2" value="minutes">
									Minutes
								</option>
							</select>
						</div>

						<div className="flex flex-row col-span-1 justify-center items-center border border-accent bg-white rounded-xl">
							<input
								required
								value={serves}
								onChange={(e) => setServes(e.target.value)}
								type="number"
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

				<div className="mt-10 bg-secondary w-full sm:w-[35rem] rounded-xl p-4">
					<h2 className="text-primary text-[1.3rem] sm:text-[1.5rem]">
						Ingredients
					</h2>

					<div className="grid grid-cols-10 mt-3 gap-x-2 sm:gap-x-4 gap-y-2">
						<h3 className="text-black opacity-40 font-bold col-span-5">
							Name
						</h3>
						<h3 className="text-black opacity-40 font-bold col-span-2">
							Qty
						</h3>
						<h3 className="text-black opacity-40 font-bold col-span-2">
							Unit
						</h3>
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
				<div className="mt-7 bg-secondary rounded-xl p-3">
					<h2 className="text-primary text-[1.3rem] sm:text-[1.5rem] mb-4">
						Instructions
					</h2>
					<div className="flex flex-col gap-2">
						{instructions.map((instruction, index) => (
							<Instruction
								key={instruction.id}
								index={index}
								instructionList={instructions}
								handleChangeInstruction={handleChangeInstruction}
								handleDeleteInstruction={handleDeleteInstruction}
							/>
						))}
						<button
							type="button"
							onClick={handleAddInstruction}
							className="p-3 rounded-xl bg-accent hover:bg-primary duration-300 text-white w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center text-xl font-semibold"
						>
							<FaPlus className="text-white text-[1rem] font-bold" />
						</button>
					</div>
				</div>

				<div className="my-12 w-full flex flex-row justify-end gap-2 text-[0.8rem] sm:text-base">
					<Link
						href={"/"}
						className="px-3 bg-background border border-accent rounded-lg text-accent py-2 font-semibold hover:bg-primary hover:text-white duration-300"
					>
						Cancel
					</Link>
					<button
						type="submit"
						onClick={handleSubmit}
						className="px-5 bg-accent rounded-lg text-white py-2 font-semibold hover:bg-primary duration-300"
					>
						{!submitLoading ? "Save!" : <BeatLoader size={8} color={"white"} />}
					</button>
				</div>
			</form>
		);
	}
}
