import { clsx } from "clsx";
import { motion, useAnimation, useInView } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

type RevealProps = PropsWithChildren & {
	width?: "w-fit" | "w-full";
};

export const Reveal = ({ children, width = "w-full" }: RevealProps) => {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const maincontrol = useAnimation();
	const slidecontrol = useAnimation();

	useEffect(() => {
		if (isInview) {
			maincontrol.start("visible");
			slidecontrol.start("visible");
		}
	}, [isInview]);

	return (
		<div ref={ref} className={clsx("relative", width)}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 }
				}}
				initial="hidden"
				animate={maincontrol}
				transition={{ duration: 0.8, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				initial="hidden"
				variants={{ hidden: { right: 0 }, visible: { right: "100%" } }}
				animate={slidecontrol}
				transition={{ duration: 0.8, ease: "easeIn" }}
				className="absolute top-4 bottom-0 left-0 right-0 bg-green-color z-20"
			/>
		</div>
	);
};
