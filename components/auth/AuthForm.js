"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiQuestionLine } from "react-icons/ri";
export default function AuthForm() {
	const supabase = createClientComponentClient();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);

	return (
		<form
			action="/auth/signIn"
			method="post"
			className="sm:w-[20rem] w-[15rem] flex flex-col font-sans items-center text-[0.8rem] sm:text-[1rem] gap-2 sm:gap-4 "
		>
			<input
				required
				autoComplete="on"
				name="email"
				type="email"
				placeholder="Email"
				className="rounded-xl bg-white w-[100%] px-[0.8rem] py-[0.6rem] sm:px-[1rem] sm:py-[0.8rem] outline-light2"
			/>
			<button
				type="submit"
				className=" px-[0.6rem] py-[0.5rem] sm:px-[1rem] sm:py-[0.8rem] bg-primaryBlue text-light rounded-xl w-[100%]"
			>
				Send Magic Link
			</button>
			<div className="flex flex-row font-medium items-center mt-[-0.2rem] gap-1">
				<RiQuestionLine className="text-primaryRed  text-[1.2rem]" />{" "}
				<span className="text-[0.8rem]">what's a Magic Link?</span>
			</div>
      
		</form>
	);
}
