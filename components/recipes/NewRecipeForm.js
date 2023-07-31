"use client";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

export default function NewRecipeForm() {
	const [title, setTitle] = useState("");
	return (
		<form>
			<div className="flex flex-col justify-between sm:flex-row">
				<input
					type="text"
					className="text-3xl font-sans font-bold placeholder:opacity-20 bg-background border-0 outline-0 focus:ring-0 text-primary placeholder:text-accent"
					placeholder="Recipe Title"
				/>
				<div className="flex flex-row gap-3">
					<div className="flex flex-row justify-center items-center border border-accent px-4 py-2 bg-white rounded-xl">
							<input
								type="number"
								min={1}
								className="text-xl font-sans text-center mb-2 font-bold w-10 placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-primary placeholder:text-accent p-0"
								placeholder="5"
								name="servings"
							/>
							<label htmlFor="servings" className="font-bold text-primary text-base">Hours</label>
					</div>

          <div className="flex flex-row justify-center items-center border border-accent px-4 py-2 bg-white rounded-xl">
							<input
								type="number"
								min={1}
								className="text-xl font-sans text-center mb-1 font-bold w-10 placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-primary placeholder:text-accent p-0"
								placeholder="10"
								name="ingredients"
							/>
							<label htmlFor="incredients" className="font-bold text-primary text-base">Servings</label>
					</div>

          <div className="flex flex-row justify-center items-center border border-accent px-4 py-2 bg-white rounded-xl">
							<input
								type="number"
								min={1}
								className="text-xl font-sans text-center mb-1 font-bold w-10 placeholder:opacity-20 bg-none border-0 outline-0 focus:ring-0 text-primary placeholder:text-accent p-0"
								placeholder="10"
								name="ingredients"
							/>
							<label htmlFor="incredients" className="font-bold text-primary text-base">Ingredients</label>
					</div>
				</div>
			</div>

			<hr className="w-full mt-3 h-[0.2rem] sm:h-[0.1rem] bg-accent" />
		</form>
	);
}
