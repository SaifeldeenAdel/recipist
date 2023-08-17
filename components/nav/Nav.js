import Link from "next/link";

export default function Nav() {
	return (
		<nav className="fixed top-0 w-full flex items-center justify-center h-[4rem] bg-background shadow-md z-[1000]">
			<div className="flex flex-row justify-between items-center w-[65rem] mx-4">
        <Link href={'/'}>
          <h1 className="font-logo text-primary text-[2rem] font-black">
            Recipist
          </h1>
        </Link>
				<form action="/api/auth/signout" method="get">
					<button
						type="submit"
						className="font-sans text-[0.9rem] font-medium bg-accent hover:bg-primary duration-200 text-background rounded-md px-3 py-2"
					>
						Logout
					</button>
				</form>
			</div>
		</nav>
	);
}
