import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type Anchor = {
	name: string;
	link: string;
};

type NavbarProps = {
	anchors: Anchor[];
	visible: boolean;
	scrolled: boolean;
	handleMenu(): void;
};
export const Navbar = ({ anchors, visible, scrolled, handleMenu }: NavbarProps) => {
	return (
		<nav className="">
			<input type="checkbox" id="menu" className="hidden peer/menu" />
			<label
				htmlFor="menu"
				onClick={handleMenu}
				className="bg-green-color sticky z-50 rounded-md block p-1 cursor-pointer text-lg md:hidden"
			>
				{visible ? <FaTimes /> : <FaBars />}
			</label>
			<ul
				className={
					scrolled
						? "fixed z-40  h-screen md:h-fit inset-0 bg-menu-color p-[5%] grid auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-700 gap-6 md:clip-circle-full md:relative md:grid-flow-col md:px-0 md:bg-transparent"
						: "fixed z-40  inset-0 bg-menu-color p-[5%] grid auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-700 gap-6 md:clip-circle-full md:relative md:grid-flow-col md:px-0 md:bg-transparent"
				}
			>
				{anchors.map((anchor, index) => (
					<li key={index} className="cursor-pointer">
						<Link href={anchor.link}>
							<p className="font-normal opacity-75 hover:opacity-100 hover:text-lg transition-[font-size] md:duration-700">
								{anchor.name}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
