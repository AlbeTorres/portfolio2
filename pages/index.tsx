import { Container } from "../components/Container";
import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { Skill } from "./_components/Skill";

// import { FaBars, FaEnvelope, FaGithub, FaJs, FaReact, FaTimes, FaTwitter } from "react-icons/fa";
export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<Container>
				<main>
					<Hero />
					<About />
					<Services />
					<Skill />
					<Contact />
					<Footer />
				</main>
			</Container>
		</div>
	);
}
