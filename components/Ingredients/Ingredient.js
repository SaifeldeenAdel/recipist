"use client";

import { useEffect, useState } from "react";
import { FaMinus, FaTrash } from "react-icons/fa";

export default function ({
	index,
	ingredientList,
	handleChangeIngredient,
	handleDeleteIngredient,
}) {
	const [quantity, setQuantity] = useState("");
	const [unit, setUnit] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		ingredientList[index].quantity = quantity;
		ingredientList[index].unit = unit;
		ingredientList[index].title = title;

		handleChangeIngredient(ingredientList);
	}, [quantity, unit, title]);

	return (
		<>
			<input
				type="number"
				required
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
				placeholder="1.24"
				min={0}
				className="font-bold col-span-2 px-2 py-0 bg-secondary-accent rounded-lg  border-0 text-accent placeholder:text-accent placeholder:opacity-40 focus:ring-0 text-[1rem] sm:text-[1.1rem]"
			/>

			<select
				value={unit}
				onChange={(e) => setUnit(e.target.value)}
				className="font-bold col-span-2 px-2 py-0 bg-secondary-accent rounded-lg border-0 text-accent placeholder:text-accent placeholder:opacity-40 focus:ring-0 text-[1rem] sm:text-[1.1rem]"
			>
				<option value="cups">cups</option>
				<option value="grams">grams</option>
				<option value="tbsps">tbsps</option>
				<option value="tsps">tsps</option>
			</select>
			<input
				type="text"
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="AP Flour"
				className="font-medium col-span-5 bg-background py-2 px-0 focus:ring-0 focus:border-accent outline-0 border-0 placeholder:text-primary placeholder:opacity-40 text-primary border-b-2 border-accent text-[1.1rem]"
			/>
			<div className="flex items-center justify-center">
				<button
					type="button"
					onClick={() => handleDeleteIngredient(index)}
					className="group col-span-1 flex justify-center items-center bg-secondary-accent rounded-lg hover:bg-primary duration-300 h-8 w-8"
				>
					<FaMinus className="text-accent group-hover:text-white duration-300 text-[0.8rem] sm:text-[1rem]" />
				</button>
			</div>
		</>
	);
}
