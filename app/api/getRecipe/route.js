import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req) {
	const supabase = createRouteHandlerClient({ cookies });
	const id = req.nextUrl.searchParams.get(["id"]);
	// console.log(name, keyword);
	let recipe, error;
	try {
		({ data: recipe, error } = await supabase
			.from("Recipes")
			.select("*")
			.eq("id", id));

		if (error) {
			return NextResponse.json({ error: "error from supabase", status: 500 });
		}
	} catch (error) {
		return NextResponse.json({
			error: error.message || error.description,
			status: 500,
		});
	}
	return NextResponse.json({ status: 200, recipe: recipe });
}
