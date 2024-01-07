import Image from "next/image";
import astronaut from "../../assets/img/header-img.svg";
import social1 from "../../assets/img/nav-icon1.svg";
import social2 from "../../assets/img/nav-icon2.svg";
import social3 from "../../assets/img/nav-icon3.svg";

export const Hero = () => {
	return (
		<section className="grid gap-y-5 md:grid-cols-[52%_48%]  py-32">
			<div className=" flex flex-col items-center md:items-start">
				<div className="py-3 px-5 mb-4 !bg-gradient-pink inline-block border-gray-300 text-lg rounded-md border w-fit banner  font-bold tracking-widest ">
					<p>Welcome to my portfolio</p>
				</div>
				<h1 className="font-sans text-4xl text-center md:text-start md:text-7xl mb-4 font-semibold">
					{"Hi! i'm Albert a Web Developer"}
				</h1>
				<p className=" text-center md:text-start">
					I am a programmer motivated by the idea of creating solutions that add value to society.
				</p>
				<ul className="flex items-center justify-between w-40 my-5">
					<li className="social-icon">
						<a href="   " className=" md:mr-2">
							<Image src={social1} alt="" />
						</a>
					</li>
					<li className=" social-icon">
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
				<div className="font-sans">
					<button className="conectbtn py-3 px-4 border rounded-md">
						<span>{"Let's Connect"}</span>
					</button>
				</div>
			</div>
			<figure className="animate-updown">
				<Image src={astronaut} alt="" />
			</figure>
		</section>
	);
};
