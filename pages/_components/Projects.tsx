import { Container } from "../../components/Container";
import { projects } from "../../util/mockdata";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<section>
			<Container>
				<h2 className="text-center text-5xl my-16  font-bold">Personal Projects</h2>
				<div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-x-8 gap-y-2">
					{projects.map((p, i) => (
						<ProjectCard key={i} title={p.title} image={p.image} description={p.description} />
					))}
				</div>
			</Container>
		</section>
	);
};
