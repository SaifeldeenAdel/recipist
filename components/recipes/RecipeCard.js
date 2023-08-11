import Link from "next/link";
import { BiTime, BiUser } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function RecipeCard({ recipe, onDelete }) {
	const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/deleteRecipe", {
        method: "DELETE",
        body: JSON.stringify({ id: recipe.id }),
      });
      const data = await res.json()
      if (data.status == 200 && res.ok){
        console.log("Deleted!")
        onDelete(recipe.id)
      } else {
        console.log(data.error)
      }
      
    } catch (e) {
			console.log(e.message || e.description);
      
    }
	};

	return (
		<Link href={`/${recipe.title.toLowerCase().split(" ").join("")}`}>
			<article className="bg-white rounded-xl h-[8.2rem] sm:h-[11.2rem] border border-primary px-6 py-4 sm:p-6 duration-200 flex flex-col gap-2 sm:gap-5 drop-shadow-lg">
				<h2 className="text-primary font-semibold text-xl sm:text-2xl">
					{recipe.title}
					<hr className="w-full mt-3 bg-accent h-[0.1rem] sm:block hidden" />
				</h2>
				<button className="absolute right-4 top-4" onClick={handleDelete}>
					<BiTrash className="text-lg text-accent" />
				</button>
				<div className="flex flex-row justify-start gap-5 sm:gap-8">
					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<BiTime className="text-xl" />{" "}
							<span className="font-medium text-primary">
								{recipe.time}
							</span>
						</div>
						<div className="text-[0.9rem] sm:text-base">
							{recipe.time_unit}
						</div>
					</div>

					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<BiUser className="text-xl" />{" "}
							<span className="font-medium text-primary">
								{recipe.serves}
							</span>
						</div>
						<div className="text-[0.9rem] sm:text-base">Servings</div>
					</div>

					{/* <div className="flex flex-col">
					<div className="flex items-center gap-2">
						<BiUser className="text-xl" />{" "}
						<span className="font-medium text-primary">{recipe.serves}</span>
					</div>
					<div className="text-[0.9rem] sm:text-base">Servings</div>
				</div> */}
				</div>
				<div className="flex flex-row gap-2 justify-end items-center mt-1 sm:mt-0">
					<button className="h-9 w-9 sm:h-11 sm:w-11 flex justify-center items-center bg-accent rounded-full duration-300 hover:bg-primary drop-shadow-lg">
						{recipe.favourite ? (
							<HiHeart className="text-white text-base sm:text-[1.3rem]" />
						) : (
							<HiOutlineHeart className="text-white text-base sm:text-[1.3rem]" />
						)}
					</button>
					<button className="h-9 w-[4.5rem] sm:h-11 sm:w-20 drop-shadow-lg font-medium flex justify-center items-center bg-accent text-white rounded-full hover:bg-primary duration-300 text-sm sm:text-base">
						Edit
					</button>
				</div>
			</article>
		</Link>
	);
}
