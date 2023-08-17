"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { FaMinus } from "react-icons/fa";

export default function Instruction({
	index,
	instructionList,
	handleChangeInstruction,
	handleDeleteInstruction,
}) {
	const [instruction, setInstruction] = useState("");

	// For resizing textarea based on input
	const textareaRef = useRef(null);
	useLayoutEffect(() => {
		// Reset height - important to shrink on delete
		textareaRef.current.style.height = "38px";
		// Set height
		textareaRef.current.style.height = `${Math.max(
			textareaRef.current.scrollHeight,
			38
		)}px`;
	}, [instruction]);

	// Running change instruction callback when instruction changes
	useEffect(() => {
		instructionList[index].content = instruction;
		handleChangeInstruction(instructionList);
	}, [instruction]);

	return (
		<div className="flex flex-row items-center gap-3 sm:gap-5">
			<div className="p-3 rounded-xl bg-accent text-white w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center text-xl font-semibold">
				<span className="mb-1">{index + 1}</span>
			</div>
			<textarea
				type="text"
        required
				ref={textareaRef}
				value={instruction}
				onChange={(e) => setInstruction(e.target.value)}
				placeholder={"Cream butter and sugar"}
				className="resize-none overflow-hidden w-full font-medium bg-secondary py-1 sm:py-2 px-0 focus:ring-0 focus:border-accent outline-0 border-0 placeholder:text-primary placeholder:opacity-40 text-primary border-b-2 border-accent text-base sm:text-[1.1rem]"
			/>
			<div className="flex items-center justify-center">
				<button
					type="button"
					onClick={() => handleDeleteInstruction(index)}
					className="group col-span-1 flex justify-center items-center bg-secondary-accent rounded-lg hover:bg-primary duration-300 h-8 w-8"
				>
					<FaMinus className="text-accent group-hover:text-white duration-300 text-[0.8rem] sm:text-[1rem]" />
				</button>
			</div>
		</div>
	);
}
