import Image from "next/image";
import social1 from "../../assets/img/nav-icon1.svg";
import social2 from "../../assets/img/nav-icon2.svg";
import social3 from "../../assets/img/nav-icon3.svg";
import { Container } from "../../components/Container";

export const Footer = () => {
	return (
		<footer className="bg-footer-pattern bg-cover bg-center bg-no-repeat">
			<Container>
				<div className="flex w-full items-center justify-center md:justify-between py-5 h-48">
					<div className="flex gap-y-5 flex-col items-center w-full md:flex-row md:justify-between">
						<p className="mt-3 font-sans">CopyRight 2022. All Right Reserved</p>
						<ul className="flex items-center justify-between w-40  ">
							<li className="social-icon">
								<a href="" className="md:mr-2">
									<Image src={social1} alt="" />
								</a>
							</li>
							<li className="social-icon">
								<a href="" className="md:mr-2">
									<Image src={social2} alt="" />
								</a>
							</li>
							<li className="social-icon">
								<a href="" className="md:mr-2">
									<Image src={social3} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
};
