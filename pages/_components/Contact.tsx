import Image from "next/image";
import contactimg from "../../assets/img/contact-img.svg";
import { Container } from "../../components/Container";

export const Contact = () => {
	return (
		<section className="contact mt-8 py-20  ">
			<Container>
				<div className="md:grid md:grid-cols-2 mt-5">
					<figure className="w-11/12 ">
						<Image src={contactimg} alt="" className="h-full w-full" />
					</figure>
					<form action="w-full">
						<h1 className="font-bold my-7 text-4xl text-center  ">Get in Touch</h1>

						<div>
							<div className="flex flex-col md:flex-row items-center md:gap-x-4">
								<input type="text" placeholder="first Name" className="rounded-md " />
								<input type="text" placeholder="Phone number" className="rounded-md " />
							</div>
							<textarea
								placeholder="A amazing work offert?"
								className="rounded-md h-44   "
							></textarea>
						</div>

						<button className="rounded-md  w-full md:w-fit ">Send</button>
					</form>
				</div>
			</Container>
		</section>
	);
};
