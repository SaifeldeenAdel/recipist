import NewRecipeForm from "@/components/recipes/NewRecipeForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function New() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();

  if(!user){
    redirect("/")
  } else {
    return <NewRecipeForm/>

  }
}
