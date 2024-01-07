import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";
import skillbottom from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";

const SkillSection = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<section className="relative md:pb-12     ">
			<Container>
				<div className="skill-bx text-center  py-16 -mt-12   ">
					<h2 className="font-bold text-5xl mb-11 ">Skills</h2>
					<Carousel responsive={responsive} infinite={true} className="relative mx-auto md:w-3/4 ">
						<div className="w-fit mx-auto   ">
							<figure className="w-3/4 mx-auto mb-6 ">
								<img src={meter1} alt="" className="w-full h-full object-cover" />
							</figure>
							<h5>Web Developer</h5>
						</div>
						<div className="w-fit mx-auto   ">
							<figure className="w-3/4 mx-auto mb-6 ">
								<img src={meter1} alt="" className="w-full h-full object-cover" />
							</figure>
							<h5>Web Desing</h5>
						</div>
						<div className="w-fit mx-auto   ">
							<figure className="w-3/4 mx-auto mb-6 ">
								<img src={meter1} alt="" className="w-full h-full object-cover" />
							</figure>
							<h5>Backend</h5>
						</div>
						<div className="w-fit mx-auto   ">
							<figure className="w-3/4 mx-auto mb-6 ">
								<img src={meter1} alt="" className="w-full h-full object-cover" />
							</figure>
							<h5>Ventas</h5>
						</div>
					</Carousel>
				</div>
			</Container>
			<img className="background-image-left" src={skillbottom} alt="" />
		</section>
	);
};

export default SkillSection;
