import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
	const supabase = createRouteHandlerClient({ cookies });
	try {
		const body = await req.json();
		const { error } = await supabase
			.from("Recipes")
			.update(body)
			.eq("id", body.id);
		if (error) {
			return NextResponse.json({ error: error.message, status: 500 });
		}

	} catch (error) {
		return NextResponse.json({ error: "error in try catch", status: 500 });
	}
	return NextResponse.json({ status: 200 });
}
