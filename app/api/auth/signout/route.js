const { createRouteHandlerClient } = require("@supabase/auth-helpers-nextjs");
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(req) {
	const supabase = createRouteHandlerClient({ cookies });

	try {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
	} catch (error) {
		console.log(error.error_description || error.message);
	}

	redirect("/");
}
