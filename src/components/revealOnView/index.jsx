import { motion, useInView } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

const RevealComponent = forwardRef(({ children, ...rest }, ref) => {
	const self = useRef();
	const inView = useInView(self);
	const [viewed, setViewed] = useState("hidden");
	const variants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	useEffect(() => {
		if (inView) setViewed("visible");
	}, [inView]);

	return (
		<motion.div
			{...rest}
			ref={self}
			animate={viewed}
			variants={variants}
			transition={{
				delay: 0.1,
				duration: 1,
			}}
		>
			{children}
		</motion.div>
	);
});

const RevealOnView = motion(RevealComponent);

export default RevealOnView;
