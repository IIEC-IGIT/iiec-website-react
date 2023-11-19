import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion, useInView } from "framer-motion";

export default function SectionHeading({ heading, subheading = null }) {
	const self = useRef();
	const inView = useInView(self);
	const [viewed, setViewed] = useState("hidden");
	const toTopVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: (opacity = 1) => ({
			opacity,
			y: 0,
		}),
	};
	const scaleInVariants = {
		hidden: {
			scaleX: 0,
		},
		visible: {
			scaleX: 1,
		},
	};

	useEffect(() => {
		if (inView) setViewed("visible");
	}, [inView]);

	return (
		<MotionConfig
			transition={{
				type: "linear",
				staggerChildren: 0.2,
			}}
		>
			<motion.div
				ref={self}
				initial="hidden"
				animate={viewed}
				className="flex flex-col items-center justify-center gap-3"
			>
				<motion.h1
					className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-content text-center"
					variants={toTopVariants}
				>
					{heading}
				</motion.h1>
				{null != subheading ? (
					<motion.h2
						className="text-lg lg:text-xl xl:text-2xl font-medium text-primary-content text-center opacity-40"
						custom={0.75}
						variants={toTopVariants}
					>
						{subheading}
					</motion.h2>
				) : null}
				<motion.div
					className="h-[2px] w-[200px] mt-4 bg-neutral-content opacity-20"
					variants={scaleInVariants}
				></motion.div>
			</motion.div>
		</MotionConfig>
	);
}
