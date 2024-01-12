import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

export const About = () => {
	return (
		<section className="py-16 text-center">
			<h2 className="font-bold text-4xl lg:text-5xl">About</h2>
			<p className="leading-normal mt-8 mb-16 text-gray-color">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt a reprehenderit,
				incidunt recusandae, officia velit officiis tempore culpa, perferendis provident totam
				inventore necessitatibus maxime libero itaque neque deleniti dolores.
			</p>
			<div className="grid gap-8 justify-items-center justify-center md:grid-cols-3">
				<article className="w-max grid justify-items-center hover:scale-125 transition cursor-pointer duration-700">
					<div className="bg-card-color aspect-square w-max p-3 rounded-full ">
						<FaInstagram className="text-green-color w-10 h-10" />
					</div>
					<h3 className="font-semibold text-xl mt-4 mb-2">Instagram</h3>
					<p className="font-light text-sm">@albe_torres</p>
				</article>
				<article className="w-max grid justify-items-center hover:scale-125 transition cursor-pointer duration-700">
					<div className="bg-card-color aspect-square w-max p-3 rounded-full">
						<FaEnvelope className="text-green-color w-10 h-10" />
					</div>
					<h3 className="font-semibold text-xl mt-4 mb-2">Email</h3>
					<p className="font-light text-sm">albertocorreoficial@gmail.com</p>
				</article>
				<article className="w-max grid justify-items-center hover:scale-125 transition cursor-pointer duration-700">
					<div className="bg-card-color aspect-square w-max p-3 rounded-full">
						<FaGithub className="text-green-color w-10 h-10" />
					</div>
					<h3 className="font-semibold text-xl mt-4 mb-2">Github</h3>
					<p className="font-light text-sm">@albetorres</p>
				</article>
			</div>
		</section>
	);
};
