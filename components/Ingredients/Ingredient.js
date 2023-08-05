export default function () {
	return (
		<>
			<input
				type="number"
				required
				placeholder="1.24"
        min={0}
				className="font-bold col-span-1 px-2 py-0 bg-secondary-accent rounded-lg  border-0 text-accent placeholder:text-accent placeholder:opacity-40 focus:ring-0 text-[1rem] sm:text-[1.1rem]"
			/>

			<select className="font-bold col-span-2 px-2 py-0 bg-secondary-accent rounded-lg border-0 text-accent placeholder:text-accent placeholder:opacity-40 focus:ring-0 text-[1rem] sm:text-[1.1rem]">
				<option className="p-2" value="cups">
					cups
				</option>
				<option className="p-2" value="grams">
					grams
				</option>
        <option className="p-2" value="grams">
					tbsps
				</option>
        <option className="p-2" value="grams">
					tsps
				</option>
			</select>
			<input
				type="text"
				required
				placeholder="AP Flour"
				className="font-medium col-span-3 bg-background py-2 px-0 focus:ring-0 focus:border-accent outline-0 border-0 placeholder:text-primary placeholder:opacity-40 text-primary border-b-2 border-accent text-[1.1rem]"
			/>
		</>
	);
}
