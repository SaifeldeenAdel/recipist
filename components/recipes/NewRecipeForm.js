"use client";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

export default function NewRecipeForm() {
	const [title, setTitle] = useState("");


  const handleSubmit = () => {
  }

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

			<button type="submit">Save!</button>
		</form>
	);
}
