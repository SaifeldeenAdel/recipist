import "./globals.css";
import { Raleway, Montserrat, Caveat } from "next/font/google";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Nav from "@/components/nav/Nav";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--montserrat",
});

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--raleway",
});

const caveat = Caveat({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--caveat",
});

export const metadata = {
	title: "Recipist",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }) {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${raleway.variable} ${caveat.variable} bg-background`}
			>
				{user ? (
					<>
						<Nav />
						<main className="mt-[7rem] sm:mt-[10rem] sm:max-w-[65rem] m-auto font-sans px-0">
							{children}
						</main>
					</>
				) : (
					<main>{children}</main>
				)}
			</body>
		</html>
	);
}
