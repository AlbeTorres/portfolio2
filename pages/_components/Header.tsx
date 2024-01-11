import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const anchors = [
		{ name: "Home", link: "#" },
		{ name: "Skills", link: "#" },
		{ name: "Projects", link: "#" }
	];

	return (
		<header
			className={
				scrolled
					? `backdrop-blur-lg bg-neutral-100/80 shadow-lg sticky top-0 z-20 w-full`
					: `sticky top-0 z-50 w-full`
			}
		>
			<div className="flex items-center mx-auto justify-between w-11/12 md:w-4/5 h-14">
				<Link href={""}>
					<p className="font-bold text-xl max-w-[200px] hover:text-2xl transition-[font-size] duration-700">
						Albe Torres
					</p>
				</Link>

				<Navbar anchors={anchors} visible={visible} handleMenu={() => setVisible(!visible)} />
			</div>
		</header>
	);
};
