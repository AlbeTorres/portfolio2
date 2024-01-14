export const Skill = () => {
	return (
		<section className="py-16 text-center">
			<h2 className="font-bold text-center text-4xl lg:text-5xl mb-16">My Skills</h2>
			<div className="bg-card-color py-12 px-8 text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-8 place-items-center">
				<article className="space-y-4">
					<p className="text-5xl font-bold">70%</p>
					<h3 className="text-green-color text-2xl">Js</h3>
				</article>
				<article className="space-y-4">
					<p className="text-5xl font-bold">70%</p>
					<h3 className="text-green-color text-2xl">Ts</h3>
				</article>
				<article className="space-y-4">
					<p className="text-5xl font-bold">70%</p>
					<h3 className="text-green-color text-2xl">Tailwindcss</h3>
				</article>
				<article className="space-y-4">
					<p className="text-5xl font-bold">70%</p>
					<h3 className="text-green-color text-2xl">React</h3>
				</article>
			</div>
		</section>
	);
};
