"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RiQuestionLine } from "react-icons/ri";
export default function AuthForm() {
	const supabase = createClientComponentClient();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [email, setEmail] = useState("");

  
  const handleLogin = async (email) => {
    try {
      console.log("logging");
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo:  "https://localhost:3000/auth/callback" } });
      console.log(data);
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally{
      setLoading(false);
    }
  };



	return (
		<div className="sm:w-[20rem] w-[15rem] flex flex-col font-sans items-center text-[0.8rem] sm:text-[1rem] gap-2 sm:gap-4 ">
			<input
				required
				autoComplete="on"
				name="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
				className="rounded-xl bg-white w-[100%] px-[0.8rem] py-[0.6rem] sm:px-[1rem] sm:py-[0.8rem] outline-light2"
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
          handleLogin(email);
				}}
				className=" px-[0.6rem] py-[0.5rem] sm:px-[1rem] sm:py-[0.8rem] bg-primaryBlue text-light rounded-xl w-[100%]"
			>
				{loading ? "Cookin..." : "Send Magic Link"}
			</button>
			<div className="flex flex-row font-medium items-center mt-[-0.2rem] gap-1">
				<RiQuestionLine className="text-primaryRed  text-[1.2rem]" />{" "}
				<span className="text-[0.8rem]">what's a Magic Link?</span>
			</div>
		</div>
	);
}
