import Image from "next/image";
import project from "../../assets/img/project-img1.png";

type props = {
	title: string;
	description: string;
	image: string;
};

export const ProjectCard = ({ title, description, image }: props) => {
	return (
		<article className="relative h-fit overflow-hidden rounded-xl mb-6 cursor-pointer">
			<Image src={image || project} alt="" />
			<div className="absolute flex flex-col gap-y-2 z-10 bottom-0 p-3 w-full bg-neutral-100/80 backdrop-blur-xl">
				<h4 className="w-full">{title}</h4>
				<p className="w-full h-16 text-sm text-clip overflow-hidden">{description}</p>
			</div>
		</article>
	);
};
