import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(req) {
	const supabase = createRouteHandlerClient({ cookies });
	const { searchParams } = new URL(req.url);
	const code = searchParams.get("code");
	if (code) {
		await supabase.auth.exchangeCodeForSession(code);

    // Editing the max age of the auth token so its not based on the session
		const authCookieName = cookies()
			.getAll()
			.filter((cookie) => cookie.name.endsWith("auth-token"))[0].name;
		const authCookieValue = cookies()
			.getAll()
			.filter((cookie) => cookie.name.endsWith("auth-token"))[0].value;
		cookies().set(authCookieName, authCookieValue, {
			maxAge: Date.now() + 1000 * 24 * 60 * 60 * 1000,
		});
	}
	return redirect("/");
}
