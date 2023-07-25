import { BiSolidUser, BiTime, BiUser } from "react-icons/bi";
import { CgBowl} from "react-icons/cg";

export default function RecipeCard({ recipe }) {
	return (
		<article className="bg-white rounded-lg h-[14rem] border border-primary p-6 hover:drop-shadow-xl duration-200 flex flex-col drop-shadow-lg">
			<h2 className="text-primary font-semibold text-2xl">{recipe.title}</h2>
			<hr className="w-full mt-2 mb-6 border-0 bg-accent h-[0.01rem]" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <BiTime className="text-xl" /> <span className="font-medium text-primary">1.5</span>
          </div>
          <div>Hours</div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <BiUser className="text-xl" /> <span className="font-medium text-primary">30</span>
          </div>
          <div>Servings</div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <CgBowl className="text-xl" /> <span className="font-medium text-primary">30</span>
          </div>
          <div>Ingredients</div>
        </div>
      </div>
		</article>
	);
}
