import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req) {
	const supabase = createRouteHandlerClient({ cookies });
	try {
		const data = await req.json();
		const { recipe, error } = await supabase.from("Recipes").insert(data);
		if (error) {
      return NextResponse.json({error: "error from supabase", status: 500})

		}
	} catch (error) {
    return NextResponse.json({error: "error in try catch", status: 500})

	}

	return NextResponse.json({status: 200})
}
