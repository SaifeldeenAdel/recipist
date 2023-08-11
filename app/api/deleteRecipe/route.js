import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function DELETE(req) {
	const supabase = createRouteHandlerClient({ cookies });
	try {
    const data = await req.json()
		const { error } = await supabase.from("Recipes").delete().eq("id", data.id);
		if (error) {
			return NextResponse.json({ error: "error in database", status: 500 });
		}
	} catch (e) {
		return NextResponse.json({ error: e.message,  status: 500 });
	}
	return NextResponse.json({ status:200 });
}
