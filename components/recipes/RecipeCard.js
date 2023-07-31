import { BiSolidUser, BiTime, BiUser } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function RecipeCard({ recipe }) {
	return (
		<article className="bg-white rounded-xl h-[8.2rem] sm:h-[11.2rem] border border-primary px-6 py-4 sm:p-6 duration-200 flex flex-col gap-2 sm:gap-5 drop-shadow-lg">
			<h2 className="text-primary font-semibold text-xl sm:text-2xl">{recipe.title}</h2>
			{/* <hr className="w-full mt-2 mb-6 bg-black h-[1rem]" /> */}
			<div className="flex flex-row justify-between">
				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						<BiTime className="text-xl" />{" "}
						<span className="font-medium text-primary">1.5</span>
					</div>
					<div className="text-[0.9rem] sm:text-base">Hours</div>
				</div>

				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						<BiUser className="text-xl" />{" "}
						<span className="font-medium text-primary">30</span>
					</div>
					<div className="text-[0.9rem] sm:text-base">Servings</div>
				</div>

				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						<CgBowl className="text-xl" />{" "}
						<span className="font-medium text-primary">30</span>
					</div>
					<div className="text-[0.9rem] sm:text-base">Ingredients</div>
				</div>
			</div>
			<div className="flex flex-row gap-2 justify-end items-center mt-2 sm:mt-3">
				<button className="h-9 w-9 sm:h-11 sm:w-11 flex justify-center items-center bg-accent rounded-full duration-300 hover:bg-primary drop-shadow-lg">
					<HiOutlineHeart className="text-white text-base sm:text-[1.3rem]" />{" "}
				</button>
				<button className="h-9 w-[4.5rem] sm:h-11 sm:w-20 drop-shadow-lg font-medium flex justify-center items-center bg-accent text-white rounded-full hover:bg-primary duration-300 text-sm sm:text-base">
					View
				</button>
			</div>
		</article>
	);
}
