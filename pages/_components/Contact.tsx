import { Reveal } from "../../components/Reveal";

export const Contact = () => {
	return (
		<section className="py-16">
			<Reveal>
				<h2 className="font-bold text-center text-4xl lg:text-5xl mb-16">Get in touch</h2>
			</Reveal>
			<Reveal>
				<form className="justify-between gap-8 flex flex-wrap max-w-screen-md md:mx-auto">
					<input
						type="text"
						name="Name"
						placeholder="Name"
						className="bg-color-background text-gray-color border-b border-white px-2 py-4 outline-none flex-grow basis-60 focus:ring-1 focus:ring-inset focus:ring-green-color transition-[box-shadow,border] duration-500 focus:border-none"
					/>
					<input
						type="email"
						name="Email"
						placeholder="Email"
						className="bg-color-background text-gray-color border-b border-white px-2 py-4 outline-none flex-grow basis-60 focus:ring-1 focus:ring-inset focus:ring-green-color transition-[box-shadow,border] duration-500 focus:border-none"
					/>

					<textarea
						name="message"
						id=""
						placeholder="message"
						className="bg-color-background text-gray-color border px-4 py-6 min-w-full max-w-full min-h-[100px] max-h-60 outline-none focus:ring-1 focus:ring-inset focus:ring-green-color transition-[box-shadow,border] duration-500 focus:border-none"
					/>
					<input
						type="submit"
						value="Contact me"
						className="px-14 mx-auto py-4 bg-green-color cursor-pointer"
					/>
				</form>
			</Reveal>
		</section>
	);
};
