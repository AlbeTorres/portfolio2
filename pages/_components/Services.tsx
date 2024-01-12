import { FaCss3, FaJs, FaReact } from "react-icons/fa";

export const Services = () => {
	return (
		<section className="py-16">
			<h2 className="font-bold text-center text-4xl lg:text-5xl mb-16">My Services</h2>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
				<article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
					<FaReact className="text-green-color w-16 h-16" />

					<h3 className="text-xl text-gray-color font-medium">Web development</h3>
				</article>
				<article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
					<FaJs className="text-green-color w-16 h-16" />

					<h3 className="text-xl text-gray-color font-medium">Software development</h3>
				</article>
				<article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
					<FaCss3 className="text-green-color w-16 h-16" />

					<h3 className="text-xl text-gray-color font-medium">Web desing</h3>
				</article>
			</div>
		</section>
	);
};
