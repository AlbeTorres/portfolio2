import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type Anchor = {
	name: string;
	link: string;
};

type NavbarProps = {
	anchors: Anchor[];
	visible: boolean;
	handleMenu(): void;
};
export const Navbar = ({ anchors, visible, handleMenu }: NavbarProps) => {
	return (
		<nav>
			<input type="checkbox" id="menu" className="hidden peer/menu" />
			<label
				htmlFor="menu"
				onClick={handleMenu}
				className="bg-green-600 sticky z-40 rounded-md block p-1 cursor-pointer text-lg"
			>
				{visible ? <FaTimes /> : <FaBars />}
			</label>
			<ul className="fixed z-30 inset-0 bg-menu-color p-[5%] grid auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-700">
				{anchors.map((anchor, index) => (
					<li key={index} className="cursor-pointer">
						<Link href={anchor.link}>
							<p className="font-normal opacity-75 hover:opacity-100 hover:text-lg transition">
								{anchor.name}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
