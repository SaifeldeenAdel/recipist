import Image from "next/image";
import NotFound from "../public/undraw_walking_outside_re_56xo.svg";

export default function () {
	return (
		<div className="flex flex-col gap-6 justify-center items-center h-[90vh]">
			<Image alt="404 Icon" src={NotFound} className="w-[12rem] sm:w-[15rem]" />
			<p className="font-sans text-[1.2rem] sm:text-[1.5rem] font-medium">
				What're you doing here?
			</p>
		</div>
	);
}
