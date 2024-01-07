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
					? `backdrop-blur-lg bg-neutral-100/80  shadow-lg fixed top-0 z-20 w-11/12`
					: `fixed top-0 z-50 w-11/12`
			}
		>
			<div className="flex items-center mx-auto justify-between h-20">
				<Link href={""}>
					<p className="font-bold text-xl max-w-[200px]">Albe Torres</p>
				</Link>

				<Navbar anchors={anchors} visible={visible} handleMenu={() => setVisible(!visible)} />
			</div>
		</header>
	);
};
