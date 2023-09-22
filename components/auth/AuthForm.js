"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RiQuestionLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function AuthForm() {
	const router = useRouter();
	const supabase = createClientComponentClient();
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			const { data, error } = await supabase.auth.signInWithOtp({
				email,
				options: { emailRedirectTo: `${location.origin}/api/auth/callback` },
			});
			if (error) throw error;
			setSuccess(true);
		} catch (error) {
			console.log(error.error_description || error.message);
		} finally {
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
				className={`px-[0.6rem] py-[0.5rem] sm:px-[1rem] sm:py-[0.8rem] bg-primary text-background rounded-xl w-[100%]`}
			>
				{loading
					? "Cookin..."
					: success
					? "Check your Email!"
					: "Send Magic Link"}
			</button>

			<div class="group">
					<div className="flex flex-row font-medium items-center mt-[-0.2rem] gap-1 hover:cursor-default">
						<RiQuestionLine className="text-primary text-[1.2rem]" />{" "}
						<span className="text-[0.8rem]">what&apos;s a Magic Link?</span>
					</div>
					<span class="absolute z-50 hidden p-3 px-6 py-2 mt-4 -ml-[5rem] text-sm  text-left bg-secondary-accent rounded tooltip-text group-hover:block max-w-xs">
						By clicking &quot;Send Magic L&quot;, you will receive an email that contains a link back to Recipist but this time, you&apos;ll be signed in. <b>Make sure to click the link on the same device you&apos;re on now.</b>
					</span>
			</div>
		</div>
	);
}
