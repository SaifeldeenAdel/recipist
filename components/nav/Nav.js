export default function () {
	return (
		<nav className="fixed top-0 w-full flex items-center justify-center h-[4rem] bg-white shadow-md">
      <div className="flex flex-row justify-between items-center w-[65rem] mx-4">
        <h1 className="font-logo text-primaryBlue text-[2rem] font-black">
          Recipist
        </h1>
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="font-sans text-[0.9rem] font-medium bg-primaryBlue hover:bg-secondaryBlue duration-200 text-light rounded-lg p-2"
          >
            Logout
          </button>
        </form>

      </div>
		</nav>
	);
}
