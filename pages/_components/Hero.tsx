import Image from "next/image";
import Link from "next/link";
import me from "../../assets/img/me.jpg";

export const Hero = () => {
	return (
		<section className="pt-8 pb-16 md:mt-8 md:flex items-center md:gap-x-5 justify-between">
			<figure className="rounded-full aspect-square w-11/12 mx-auto max-w-sm relative md:order-1 md:mx-0">
				<Image fill src={me} alt="" className="rounded-full" />
			</figure>
			<article className="text-center mt-5 md:w-1/2 lg:w-3/4 md:text-left">
				<h1 className="font-bold text-4xl lg:text-5xl">Hi, I&apos;m Albert Torres.</h1>
				<p className="text-gray-color text-xl lg:text-2xl mt-3 mb-6">Software Engineer.</p>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
					<Link href={""} className="bg-green-color flex items-center justify-center">
						Download CV
					</Link>
					<Link href={""} className="border border-white flex items-center justify-center">
						Learn More
					</Link>
				</div>
			</article>
		</section>
	);
};
