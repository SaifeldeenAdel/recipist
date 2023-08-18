import EditRecipeForm from "@/components/recipes/EditRecipeForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Edit({ params }) {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();

  
	if (!user) {
    redirect("/");
	} else {
    
    let recipe, error;
		try {
			({ data: recipe, error } = await supabase
				.from("Recipes")
				.select("*")
				.eq("id", params.id));

		} catch (e) {
      console.log(e.message || e.description)
      redirect('/')
    }
		return <EditRecipeForm recipe={recipe[0]} />;
	}
}
