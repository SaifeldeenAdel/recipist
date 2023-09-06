import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { FaPlus } from "react-icons/fa";

import AuthForm from "@/components/auth/AuthForm";
import Recipes from "@/components/recipes/Recipes";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();


	if (!user) {
		return (
			<main className="flex flex-col h-[100vh] justify-center items-center">
				<header className="flex flex-col justify-center items-center mb-10">
					<div className="font-logo font-bold text-primary text-[6.5rem] sm:text-[9rem] z-1000">
						Recipist.
					</div>
					<div className="font-sans font-light text-dark text-[1.1rem] sm:text-[1.4rem] mt-[-1.2rem] sm:mt-[-1.8rem]">
						Create. Save. Cook.
					</div>
				</header>

				<AuthForm />
			</main>
		);
	} else {
		return (
			<>
				<header className="w-full mb-8 px-5 sm:px-2">
					<div className="flex flex-row justify-between items-end">
						<div className="flex flex-col">
							<h1 className="font-bold text-primary text-[1.7rem] md:text-[2rem] leading-12">
								Your Creations
							</h1>
							<p className="font-light text-sm md:text-[1.1rem]">
								Find all of your recipes here, soon you'll be able to filter your
								favourites.
							</p>
						</div>
						<Link
							href="/new"
							className="p-2 rounded-lg bg-accent flex justify-center items-center ml-3 hover:bg-primary duration-300"
						>
							<FaPlus className="text-base sm:text-lg text-white" />
						</Link>
					</div>
					<hr className="w-full mt-3 h-[0.2rem] sm:h-[0.1rem] bg-accent" />
				</header>

				<Recipes />
			</>
		);
	}
}
